import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

// TODO add timestamp...
const Post = ({ displayName, userName, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1361506396500541443/waa9IU-Y_400x400.jpg"
          alt="profile_avatar"
        />
      </div>
      <div className="post__body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              rodrigoodz
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <img src="http://i.stack.imgur.com/e8nZC.gif" alt="gif_image" />
        <div className="post__footer">
          <ChatBubbleIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
