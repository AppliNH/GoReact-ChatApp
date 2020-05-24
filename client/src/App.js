import './App.css';
import './Animations.css';

import Connexion from './component/Connexion';
import { Container, Grid, GridColumn, GridRow, Transition } from "semantic-ui-react";
import React, { Component, createRef } from 'react'
import ChatInput from './component/ChatInput';
import Message from './component/Message';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { subscribeToMessages } from './controllers/ws';
import axios from 'axios';


export default class App extends Component {

  constructor(props) {
    super(props);

  }

  state = {
    messages: {},
    username: this.props.match.params.username,
    room: this.props.match.params.room
  }


  messagesRef = createRef();

  addMessage = async (message) => {
    fetch("http://localhost:5000/"+this.state.room,{ method: "POST",body: JSON.stringify(message)})
  }

  componentDidMount() {
    subscribeToMessages((err, messages) => this.setState({
      messages
    }), this.state.room);
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  render() {

    const messages = Object
      .keys(this.state.messages)
      .map(key =>
        <CSSTransition
          timeout={500}
          classNames={"fade"}
          key={key}>
          <Message
            isFromCurrent={this.state.username == this.state.messages[key].username}
            message={this.state.messages[key].message}
            username={this.state.messages[key].username} />
        </CSSTransition>
      )

    return (
      <div className="box">
        <div>
          <div ref={this.messagesRef} className="messages">
            {events => console.log(events)}
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
          </div>
        </div>
        <ChatInput length={140} username={this.state.username} addMessage={this.addMessage} />
      </div>
    )
  }
}



