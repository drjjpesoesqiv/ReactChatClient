import React, { Component } from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input id="chat-input" type="text" />
    )
  }

  componentDidMount() {
    var self = this;
    document.getElementById("chat-input").addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        self.sendMessage(self, this.value);
        this.value = '';
      }
    });
  }

  sendMessage(self, msg) {
    self.props.socket.send(JSON.stringify({
      action: 'publish',
      msg: msg
    }));
  }
}

export default ChatInput;