import '../assets/CSS/FrontEndCoding.css'
const FrontEndCoding = ({ title, subtitle, topics, languages }) => {
  return (
    <div className="frontend-coding Container-fluid px-5">
      <h3 className="border p-3 rounded">{title}</h3>
      <div className="frontend-card">
        <h5> 🞇 {subtitle}</h5>
        <ul className="list-group list-group-flush">
          {topics.map((topic, index) => (
            <li key={index} className="frontend-list-group-item">
              {topic}
            </li>
          ))}
        </ul>
        <div className="frontend-lang-box mt-3 p-2 px-3 border rounded">
          <h6 className="fw-bold">Languages to Learn:</h6>
          <p>{languages.join(", ")}</p>
        </div>
      </div>
      <button className="frontend-btn btn btn-primary mt-3 border-0">
        Apply For This Module
      </button>
    </div>
  );
};

export default FrontEndCoding;
