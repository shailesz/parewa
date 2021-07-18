import React from "react";

const Small = ({ post }) => {
  return (
    <div className="content small">
      <div className="heading">
        <div className="title">{post.title}</div>
      </div>

      <div className="body">
        <div className="description">{post.description}</div>
        <div className="metadata">
          <div className="avatar">
            <img src="https://picsum.photos/200" alt="avatar" />
          </div>
          <div className="author-information">
            <div className="author">{post.source}</div>
            <div className="profession">Newspaper</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Small;
