import React from "react";

const Medium = ({ post }) => {
  return (
    <div className="content medium">
      <div className="heading">
        <div className="title medium">{post.title}</div>
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

export default Medium;
