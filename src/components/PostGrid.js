import React from "react";
// import PostCard from "./PostCard";
import Small from "./cards/Small";
import Large from "./cards/Large";
import Medium from "./cards/Medium";

const PostGrid = ({ posts }) => {
  return (
    <div className="content-container">
      <div className="column">
        <Small body={posts[0].body} title={posts[0].title} />
        <hr />
        <Small body={posts[1].body} title={posts[1].title} />
      </div>

      <div className="seperator"></div>

      <div className="column">
        <Large body={posts[2].body} title={posts[3].title} />
      </div>

      <div className="seperator"></div>

      <div className="column">
        <Small body={posts[3].body} title={posts[3].title} />
        <hr />
        <Small body={posts[4].body} title={posts[4].title} />
      </div>

      <div className="seperator"></div>

      <div className="column">
        <Medium body={posts[5].body} title={posts[5].title} />
        <hr />
        {/* <Medium /> */}
      </div>
    </div>
  );
};

export default PostGrid;
