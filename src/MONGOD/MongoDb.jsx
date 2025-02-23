import { languages, MongoTopics } from "./Mongotopics";
import '../assets/CSS/MongoDb.css'
const MongoDb = () => {
  return (
    <div className="container-fluid px-5">

      <h2 className="mongo-heading border p-3 rounded">MongoDB</h2>

    
      <ul className="topic-list">
        {MongoTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <div className="language-box border">
        <h3 className="language-heading">LANGUAGES TO LEARN:</h3>
        <p className="language-list">{languages.join(", ")}</p>
      </div>

      <button className="apply-button">Apply For This Module</button>
    </div>
  );
}

export default MongoDb