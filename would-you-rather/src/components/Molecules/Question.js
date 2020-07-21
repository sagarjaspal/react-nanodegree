import React from "react";
import UserCard from "../Atoms/UserCard";
import { Link } from "react-router-dom";

const Question = (props) => {
  const { id, text, author, avatar } = props;
  const MAX_TEXT_LENGTH = 20;

  return (
    <UserCard avatar={avatar} title={`${author} asked`}>
      <h4>Would You Rather</h4>
      <p className="card-text">
        {text.length > MAX_TEXT_LENGTH
          ? text.substring(0, MAX_TEXT_LENGTH - 3) + "..."
          : text}
      </p>
      <Link to={`questions/${id}`} className="btn btn-info">
        View Poll
      </Link>
    </UserCard>
  );
};

// https://avatars.dicebear.com/api/female/sarahedo.svg
export default Question;
