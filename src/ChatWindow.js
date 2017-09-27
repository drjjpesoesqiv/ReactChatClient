import React, { Component } from 'react';
import './ChatWindow.css';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: new WebSocket(
        'ws://localhost:8080/websocket',
        'chatserver'
      )
    };
  }

  render() {
    return (
      <div id="chat-window">
        <ChatMessages socket={this.state.socket} />
        <ChatInput socket={this.state.socket} />
      </div>
    )
  }

  componentDidMount() {
    var socket = new WebSocket(
      'ws://localhost:8080/websocket',
      'chatserver'
    )

    this.setState({socket: socket});
  }

  componentWillUnmount() {
    this.state.socket.close();
  }
}

export default ChatWindow;
