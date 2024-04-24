import React from "react";
import Footer from "../component/Footer";
import NavbarComponent from "../component/Navbar";
import CourseCard from "../component/CourseCards";

const Courses = () => {
  return (
    <div>
      <NavbarComponent />
      <CourseCard />
      <Footer />
    </div>
  );
};

export default Courses;
