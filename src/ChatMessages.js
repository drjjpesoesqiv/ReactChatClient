import React, { Component } from 'react';

class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  render() {
    return (
      <div id="chat-messages">
        {this.state.messages.map(function(msg, index) {
          return <span key={index}>{msg.id}: {msg.msg}</span>;
        })}
      </div>
    )
  }

  componentDidMount() {
    this.props.socket.onmessage = (e) => this.onMessage(e);
  }

  onMessage(e) {
    var json = JSON.parse(e.data);
    if (json.msg !== undefined)
      var messages = this.state.messages;
      messages.push(json)
      this.setState({
        messages: messages
      })
  }
}

export default ChatMessages;