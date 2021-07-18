import React, { useState, useEffect } from "react";
import PostGrid from "./PostGrid";
import placeholder from "../apis/placeholder";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await placeholder.get("/news");
    console.log(data);
    setPosts(data);
  };

  return (
    <div className="ui container">
      {posts.length === 0 ? "Loading!" : <PostGrid posts={posts} />}
    </div>
  );
};

export default App;
