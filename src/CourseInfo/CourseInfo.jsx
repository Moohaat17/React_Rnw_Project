import React from "react";
import'../assets/CSS/CourseInfo.css'
const CourseInfo = ({
  title,
  description,
  duration,
  dailyTime,
  eligibility,
  features,
  imageUrl,
}) => {
  return (
    <div className="course-info bg-white ">
      <div className="container-fluid">
        <div className="row">
          <h2 className="">
            <span style={{ color: "black" }}>About</span> {title}
          </h2>
          <p>{description}</p>
          <div className="buttons-content d-flex">
            <button className="btn me-2 p-2 p-3 border mt-4">
              Course Duration:{" "}
              <span style={{ color: "black" }}>{duration}</span>
            </button>
            <button className="btn p-2 p-3 border mt-4">
              Daily Time: <span style={{ color: "black" }}>{dailyTime}</span>
            </button>
          </div>

          <h4 className="mt-4 mb-3">Eligibility For This Course</h4>
          <ul className="list-unstyled">
            {eligibility.map((item, index) => (
              <li key={index} className="px-3">{item}</li>
            ))}
          </ul>

          <h4 className="mt-4 mb-3">Included In This Course</h4>
          <ul className="list-unstyled">
            {features.map((feature, index) => (
              <li key={index} className="px-3">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
