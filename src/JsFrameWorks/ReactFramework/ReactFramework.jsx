import ReactTopics from "./ReactTopics";
import "../../assets/CSS/ReactFrameworkStyles.css";

const ReactFramework = () => {
  return (
    <div className="container-fluid">
      <h2 className="framework-heading">🞇 {ReactTopics.title}</h2>
      <ul className="framework-list">
        {ReactTopics.topics.map((topic, idx) => (
          <li key={idx} className="framework-list-item">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactFramework;
