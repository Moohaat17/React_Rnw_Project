import VueFrameworkData from "./VueFrameworkData";

const VueFramework = () => {
  return (
    <div className="container-fluid">
      <h2 className="framework-heading">🞇 {VueFrameworkData.title}</h2>
      <ul className="framework-list">
        {VueFrameworkData.topics.map((item, idx) => (
          <li key={idx} className="framework-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VueFramework;
