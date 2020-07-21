import React from "react";

const UserCard = (props) => {
  const { title, avatar, children } = props;
  return (
    <div>
      <div className="column card-header card-top">
        {title && title !== null && <div>{title}</div>}
      </div>
      <div className="card user-card row">
        <div className="col-md-3 avatar-container">
          <img src={avatar} alt="User Avatar" />
        </div>
        <div className="col-md-1"></div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default UserCard;
