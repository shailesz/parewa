import React, { useState, useEffect } from "react";
import PostGrid from "./PostGrid";
import placeholder from "../apis/placeholder";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetchPosts();
  }, [])

    const fetchPosts = async () => {
    const { data } = await placeholder.get("/posts");
    setPosts(data);
  };

  return (
    <div className="ui container">
      <PostGrid posts={posts} />
    </div>
  );
};

export default App;
