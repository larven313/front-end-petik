import e from "express";
import Trainer from "../model/TrainerModel.js";
import path from "path";
import fs from "fs";

export const getTrainer = async (req, res) => {
  try {
    const response = await Trainer.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTrainerById = async (req, res) => {
  try {
    const response = await Trainer.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTrainer = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const name = req.body.name;
  const address = req.body.address;
  const skill = req.body.skill;
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
      await Trainer.create({
        name: name,
        address: address,
        skill: skill,
        image: fileName,
        url: url,
      });
      res
        .status(201)
        .json({ msg: "Trainer Created Successfuly", data: req.body });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateTrainer = async (req, res) => {
  const trainer = await Trainer.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!trainer) {
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
    const filepath = `./public/images/${trainer.image}`;
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
    fileName = trainer.image;
  }

  const name = req.body.name;
  const address = req.body.address;
  const skill = req.body.skill;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Trainer.update(
      {
        name: name,
        address: address,
        skill: skill,
        image: fileName,
        url: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res
      .status(200)
      .json({ message: "Trainer Updated Successfully", data: req.body });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTrainer = async (req, res) => {
  const trainer = await Trainer.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!trainer) {
    return res.status(404).json({ message: "Data Not Found" });
  }

  try {
    if (trainer.image) {
      const filepath = `./public/images/${trainer.image}`;
      fs.unlinkSync(filepath);
    }

    await Trainer.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "Trainer Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
