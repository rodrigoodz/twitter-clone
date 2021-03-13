import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snap) => {
      setPosts(
        snap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((p) => {
          return (
            <Post
              displayName={p.displayName}
              userName={p.userName}
              verified={p.verified}
              text={p.text}
              image={p.image}
              avatar={p.avatar}
              key={p.id}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
