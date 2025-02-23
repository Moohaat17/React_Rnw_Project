import React from "react";
import CourseUI from "./CourseUI";
import Modules from "./CourseModule";

const CourseModules = () => {
  return (
    <div className="container-fluid px-5">
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "30px",
          textAlign: "center",
          backgroundColor: "#ecf2fc",
          color: "#2c549d",
          borderBlockColor: "#c5d7f6",
        }}
        className="border p-3 rounded"
      >
        Course Modules
      </h2>
      <div className="row">
        {Modules.map((module, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <CourseUI name={module.name} image={module.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;
