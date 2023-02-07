import React, { Components } from "react";

class Message extends Components {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  render() {
    return <h1> Welcome Visitor</h1>;
  }
}

export default Message;
