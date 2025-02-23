import React from "react";
import '../assets/CSS/FeatureCard.css'

const FeatureCard = ({ image, title }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon me-2">
        <img src={image} alt={title} className="feature-img" />
      </div>
      <p className="feature-title ms-2">{title}</p>
    </div>
  );
};

export default FeatureCard;
