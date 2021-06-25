import React from "react";

const Large = ({ title, body }) => {
  return (
    <div className="content large">
      <div className="heading">
        <div className="cover">
          <img src="https://picsum.photos/440" alt="cover" />
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="body">
        <div className="description large">{body}</div>
        <div className="metadata">
          <div className="avatar">
            <img src="https://picsum.photos/200" alt="avatar" />
          </div>
          <div className="author-information">
            <div className="author">James robert</div>
            <div className="profession">Editor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Large;
