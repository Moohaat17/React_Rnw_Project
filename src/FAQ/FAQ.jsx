import React from 'react'
import { FAQdata } from './FAQdata';
import '../assets/CSS/FAQ.css'

const FAQ = () => {
  return (
    <div className="container-fluid px-5">
      <h2 className="faq-heading">FAQ</h2>

      {FAQdata.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 className="faq-question border rounded">{faq.question}</h3>
          <ul className="faq-answer">
            {faq.answer.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FAQ