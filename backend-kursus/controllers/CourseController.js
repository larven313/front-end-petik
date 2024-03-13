import e from "express";
import Course from "../model/CourseModel.js";
import path from "path";
import fs from "fs";

export const getCourse = async (req, res) => {
  try {
    const response = await Course.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCourseById = async (req, res) => {
  try {
    const response = await Course.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourse = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const name = req.body.name;
  const trainer_id = req.body.trainer_id;
  const desc = req.body.desc;
  const file = req.files.file;

  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg", ".svg"];

  if (!allowedType.includes(ext.toLowerCase())) {
    return res.status(422).json({ msg: "Invalid Images" });
  }
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Course.create({
        name: name,
        trainer_id: trainer_id,
        desc: desc,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Course Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateCourse = async (req, res) => {
  const course = await Course.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!course) {
    return res.status(404).json({ message: "Data Not Found" });
  }

  let fileName = "";

  if (req.files !== null) {
    const image = req.files.file;

    const fileSize = image.data.length;
    const ext = path.extname(image.name);
    fileName = image.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    // hapus gambar jika ada
    const filepath = `./public/images/${course.image}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    } else {
      console.log("File does not exist:", filepath);
    }

    // ganti gambar dengan yang baru
    image.mv(`./public/images/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  } else {
    fileName = course.image;
  }

  const name = req.body.name;
  const trainer_id = req.body.trainer_id;
  const desc = req.body.desc;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Course.update(
      {
        name: name,
        trainer_id: trainer_id,
        desc: desc,
        image: fileName,
        url: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Course Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCourse = async (req, res) => {
  const course = await Course.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!course) {
    return res.status(404).json({ message: "Data Not Found" });
  }

  try {
    if (course.image) {
      const filepath = `./public/images/${course.image}`;
      fs.unlinkSync(filepath);
    }

    await Course.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "Course Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
