import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const SentMessage = (props) => {
  return (
    <div className="sent-message">
      <div className="body">{props.message.body}</div>
    </div>
  );
};

const ReceivedMessage = (props) => {
  return (
    <div className="received-message">
      <img
        className="avatar"
        alt="chatpersonname"
        src={props.message.user.avatar}
      ></img>
      <div className="divider">
        <div className="username">{props.message.user.username}</div>
        <div className="body">{props.message.body}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
