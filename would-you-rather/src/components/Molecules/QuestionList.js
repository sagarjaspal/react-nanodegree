import React from "react";
import Question from "./Question";

const QuestionList = (props) => {
  const { questions, users } = props;
  return (
    <div className="question-list">
      <ul>
        {Object.values(questions)
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((question) => (
            <li key={question.id}>
              <Question
                id={question.id}
                text={question.optionOne.text}
                author={question.author}
                avatar={users[question.author].avatarURL}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default QuestionList;
