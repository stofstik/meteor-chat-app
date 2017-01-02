import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../containers/AccountsUIWrapper';
import ChatsList from '../containers/ChatsList';
import UsersList from '../containers/UsersList';
import ChatView from '../containers/ChatView';
import TextInput from '../components/TextInput';
import TypingUsers from '../components/TypingUsers';

import './App.sass';

export class App extends Component {
  state = {
    currentChatId: ''
  }

  setCurrentChatId(id) {
    console.log(id)
    this.setState( { currentChatId: id } );
  }

  componentDidMount(){
    console.log('w00t we have react');
  }

  render() {
    return (
      this.props.currentUser ?
        <div className="container">
          <div className="side-bar">
            <ChatsList setChatId={ this.setCurrentChatId.bind(this) }/>
            <UsersList />
          </div>
          <ChatView currentChatId={ this.state.currentChatId }/>
        </div>
      : <AccountsUIWrapper />
    );
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, App);
