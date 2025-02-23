import React from 'react'
import { ExpressTopics, languages } from './ExpressTopics'
import '../../assets/CSS/ExpressJs.css'

const ExpressJs = () => {
  return (
    <div className="container-fluid">
      <h2 className="heading">🞇 Express Js</h2>
      <ul className="topic-list">
        {ExpressTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <div className="language-box border rounded">
        <h3 className="language-heading">LANGUAGES TO LEARN:</h3>
        <p className="language-list">{languages.join(", ")}</p>
      </div>
    </div>
  );
}

export default ExpressJs