import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1361506396500541443/waa9IU-Y_400x400.jpg"
            alt="profile_avatar"
          />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
