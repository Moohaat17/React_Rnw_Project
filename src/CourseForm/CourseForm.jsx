import React from 'react'
import '../assets/CSS/CourseForm.css'

const CourseForm = () => {
  return (
    <>
        <img
          src="/public/images/trending-full.jpg"
          alt="Course Banner"
          className="img-fluid  rounded shadow"
        />
        <div className="book-form bg-white m-0 p-5 shadow">
          <h4 className="text-center p-4">Book a Free Demo Session</h4>
          <form>
            <input
              type="text"
              className="form-control my-3 p-3 rounded-start-2"
              placeholder="Name"
            />
            <input
              type="email"
              className="form-control my-3 p-3"
              placeholder="Email"
            />
            <input
              type="text"
              className="form-control my-3 p-3"
              placeholder="Phone Number"
            />
            <select className="form-control mb-2 p-3">
              <option>---Select Nearest Branch Location---</option>
              <option>Surat</option>
              <option>Ahmedabad</option>
              <option>Vadodara</option>
            </select>
            <button className="btn btn-danger w-100 mt-2">Submit</button>
          </form>
        </div>

    </>
  );
}

export default CourseForm
