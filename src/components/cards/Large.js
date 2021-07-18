import React from "react";

const Large = ({ post }) => {
  return (
    <div className="content large">
      <div className="heading">
        <div className="cover">
          <img src={post.imageURL} alt="cover" />
        </div>
        <div className="title">{post.title}</div>
      </div>
      <div className="body">
        <div className="description large">{post.description}</div>
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

export default Large;
