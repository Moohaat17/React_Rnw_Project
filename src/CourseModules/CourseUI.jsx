import React from "react";
import "../assets/CSS/CourseModules.css"

const CourseUI = ({ name, image }) => {
  return (
    <div className="course-card">
      <div className="image-container">
        <img src={image} alt={name} className="course-image image-fluid" />
      </div>
      <div className="course-body">
        <h5 className="course-title">{name}</h5>
      </div>
    </div>
  );
};

export default CourseUI;
