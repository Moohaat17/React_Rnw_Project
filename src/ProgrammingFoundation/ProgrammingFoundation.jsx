import FoundationDetails from "./FoundationData";
import '../assets/CSS/FoundationStyle.css'
const ProgrammingFoundation = () => {
  return (
    <div className="container-fluid px-5">
      <div className="foundation-header mt-5">
        {FoundationDetails.sectionTitle}
      </div>
      <div className="foundation-section">
        <h3 className="foundation-subtitle">
          <strong className="fs-4">🞇 {FoundationDetails.courseName}</strong>
        </h3>
        <ul className="foundation-list">
          {FoundationDetails.courseTopics.map((topic, index) => (
            <li key={index} className="foundation-item">
              • {topic}
            </li>
          ))}
        </ul>
        <div className="course-box">
          <strong className="p-2">COURSE TO LEARN:</strong>
          <p className="px-2">{FoundationDetails.courseName}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingFoundation;
