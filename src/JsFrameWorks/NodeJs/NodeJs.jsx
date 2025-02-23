import NodeTopics from "./NodeTopics";
import '../../assets/CSS/NodeFramework.css'
const NodeJs = () => {
  return (
    <div className="node-content">
      <div className="container-fluid">
        <h3>🞇 Node Js</h3>
        <ul>
          {NodeTopics.map((topic, idx) => (
            <li key={idx}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NodeJs;