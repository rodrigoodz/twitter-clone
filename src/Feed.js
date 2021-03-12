import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;