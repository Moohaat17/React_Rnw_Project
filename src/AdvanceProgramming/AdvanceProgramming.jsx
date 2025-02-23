import AdvancedTopics from "./Advancedtopics";
import '../assets/CSS/AdvancedStyles.css'
const AdvancedProgramming = () => {
  return (
    <div className="container-fluid px-5">
      <div className="advanced-header">{AdvancedTopics.sectionTitle}</div>
      <div className="advanced-section">
        <h3 className="advanced-subtitle">
          <strong className="fs-4">🞇 {AdvancedTopics.courseName}</strong>
        </h3>
        <ul className="advanced-list">
          {AdvancedTopics.courseTopics.map((topic, index) => (
            <li key={index} className="advanced-item">
              • {topic}
            </li>
          ))}
        </ul>
        <div className="course-box">
          <strong>LANGUAGES TO LEARN:</strong>
          <p>{AdvancedTopics.languages.join(", ")}</p>
        </div>
        <button className="apply-button d-block mt-3">
          Apply For This Module
        </button>
      </div>
    </div>
  );
};

export default AdvancedProgramming;