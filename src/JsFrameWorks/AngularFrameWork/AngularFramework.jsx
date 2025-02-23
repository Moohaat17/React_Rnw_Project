import AngularTopics from "./AngularTopics";

const AngularFramework = () => {
  return (
    <div className="framework-section">
      <h3 className="framework-subtitle text-dark">🞇 Angular Js</h3>
      <ul className="framework-list">
        {AngularTopics.map((topic, idx) => (
          <li key={idx} className="framework-item">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AngularFramework;
