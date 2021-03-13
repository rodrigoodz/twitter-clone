import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // 3:00:54
  useEffect(() => {
    db.collection("posts").onSnapshot((snap) => {
      setPosts(snap.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((p) => {
        return (
          <Post
            displayName={p.displayName}
            userName={p.userName}
            verified={p.verified}
            text={p.text}
            image={p.image}
            avatar={p.avatar}
          />
        );
      })}
    </div>
  );
};

export default Feed;
