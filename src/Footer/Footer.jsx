import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaYoutube } from 'react-icons/fa';
import '../assets/CSS/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid px-5 d-flex justify-content-around">
        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <ul>
            <li>
              <strong>Our Branches</strong>
            </li>
            {[
              "A K Road",
              "Yogi Chowk",
              "Sarthana",
              "Mota Varachha",
              "Ved Road",
              "Adajan",
              "Dindoli",
              "Vesu",
            ].map((branch, index) => (
              <li key={index}>
                <span style={{ color: "red", margin: "3px" }}>➤</span> {branch}
              </li>
            ))}
          </ul>
          <p>
            <FaPhone /> +91 7878 444 333
          </p>
          <p>Franchise Information</p>
          <p>
            <FaEnvelope /> info@rwmultimedia.edu.in
          </p>
          <div className="social-icons">
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Trending Courses */}
        <div className="footer-section">
          <h3>TRENDING COURSE</h3>
          <ul>
            {[
              "GIM",
              "PHP",
              "Project Training Surat",
              "Android Training Course",
              "Web Designing Training Course",
              "Full Stack Development Course",
            ].map((course, index) => (
              <li key={index}>
                <span style={{ color: "red", margin: "3px" }}>➤</span>
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Pages */}
        <div className="footer-section">
          <h3>IMPORTANT PAGES</h3>
          <ul>
            {[
              "Home",
              "Contact Us",
              "About Us",
              "Blog",
              "Events",
              "Approval",
              "Students T&C",
              "Sitemap",
              "Cities Sitemap",
              "Student Login",
            ].map((page, index) => (
              <li key={index}>
                <span style={{ color: "red", margin: "3px" }}>➤</span>
                {page}
              </li>
            ))}
          </ul>
        </div>

        {/* Be Recruiter */}
        <div className="footer-section">
          <h3>BE RECRUITER</h3>
          <ul>
            {[
              "Company Login/Register",
              "Company T&C",
              "Placement Student Login",
              "Placement Student T&C",
            ].map((item, index) => (
              <li key={index}>
                <span style={{ color: "red", margin: "3px" }}>➤</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            <FaPhone /> +91 93513 15196
          </p>
          <p>
            <FaEnvelope /> placement@rwmultimedia.edu.in
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © Copyright 2025. Red & White Education PVT LTD. All Rights Reserved.
        </p>
        <p>Certificate Verification</p>
      </div>
    </footer>
  );
}

export default Footer