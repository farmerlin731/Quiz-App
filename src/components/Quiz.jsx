import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  // The following way for setting useState is not the optimal.
  // const [activeQuestIndex,setActiveQuestIndex] = useState(0);
  // const [userAns,setUserAns] = useState([]);

  const [ansArr, setAnsArr] = useState([]);
  const questIndex = ansArr.length; //This means the order of questions is not random.
  function handleAnsClick(ans) {
    setAnsArr((prev) => [...prev, ans]);
  }

  //Set the boundary of questions.
  if (ansArr.length === QUESTIONS.length) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="A trophy!" />
        <h2>Quiz Complete :)</h2>
      </div>
    );
  }

  //Shuffle Answers
  const shufAns = [...QUESTIONS[questIndex].answers];
  shufAns.sort((a, b) => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[questIndex].text}</h2>
        <ul id="answers">
          {shufAns.map((ans) => (
            <li className="answer" key={ans}>
              <button onClick={() => handleAnsClick(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
