import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState({
    message: "",
    image: "",
  });

  const handleMessageInput = (e) => {
    setTweetMessage({ ...tweetMessage, message: e.target.value });
  };

  const handleImgInput = (e) => {
    setTweetMessage({ ...tweetMessage, image: e.target.value });
  };

  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage.message.length > 0) {
      db.collection("posts").add({
        displayName: "rodrigoodz",
        userName: "rodrigoodz",
        verified: true,
        text: tweetMessage.message,
        image: tweetMessage.image,
        avatar:
          "https://pbs.twimg.com/profile_images/1361506396500541443/waa9IU-Y_400x400.jpg",
      });
      setTweetMessage({ message: "", image: "" });
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1361506396500541443/waa9IU-Y_400x400.jpg"
            alt="profile_avatar"
          />
          <input
            value={tweetMessage.message}
            type="text"
            maxLength="140"
            placeholder="What's happening?"
            onChange={handleMessageInput}
          />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetMessage.image}
          onChange={handleImgInput}
        />
        <Button className="tweetBox__tweetButton" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
