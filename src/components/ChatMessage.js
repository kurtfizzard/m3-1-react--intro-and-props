import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  // conditional to determine which type of message is rendered
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

// a variable represending the sent message, rendering just the message
const SentMessage = (props) => {
  return (
    <div className="sent-message">
      <div className="body">{props.message.body}</div>
    </div>
  );
};

// a variable represending the received message, rendering the username, avatar and message
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
