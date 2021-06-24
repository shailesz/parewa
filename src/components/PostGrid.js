import React from "react";
import PostCard from "./PostCard";

const PostGrid = ({ posts }) => {
  const renderPosts = posts.map((post) => {
    return <PostCard post={post} />;
  });

  return <div className="ui three column grid">{renderPosts}</div>;
};

export default PostGrid;
