import React from "react";
// import PostCard from "./PostCard";
import Small from "./cards/Small";
import Large from "./cards/Large";
import Medium from "./cards/Medium";

const PostGrid = ({ posts }) => {
  return (
    <div className="content-container">
      <div className="column">
        <Small post={posts[0]} />
        <hr />
        <Small post={posts[1]} />
      </div>

      <div className="seperator"></div>

      <div className="column">
        <Large post={posts[2]} />
      </div>

      <div className="seperator"></div>

      <div className="column">
        <Small post={posts[3]} />
        <hr />
        <Small post={posts[4]} />
      </div>

      <div className="seperator"></div>

      <div className="column">
        <Medium post={posts[5]} />
        <hr />
        {/* <Medium /> */}
      </div>
    </div>
  );
};

export default PostGrid;
