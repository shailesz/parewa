import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="column">
      <div className="ui card">
        <div className="content">
          <div className="center aligned header">{post.title}</div>
          <div className="center aligned description">
            <p>{post.body}</p>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">Jenny</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
