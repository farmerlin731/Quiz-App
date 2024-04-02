import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [ansArr, setAnsArr] = useState([]);
  const questIndex = ansArr.length;
  function handleAnsClick(ans) {
    setAnsArr((prev) => [...prev, ans]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[questIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[questIndex].answers.map((ans) => (
            <li className="answer" key={ans}>
              <button onClick={() => handleAnsClick(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
