import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

export class UsernameById extends Component {
  componentWillUpdate() {
    if(this.props.isTyping) {
      ReactDOM.findDOMNode(this).classList.remove('is-typing');
    } else {
      ReactDOM.findDOMNode(this).classList.add('is-typing');
    }
  }

  render() {
    console.log('rendering...');
    const { user } = this.props;
    const username = user ? user.username : 'undefined';
    return (
      <span className="username">{ username }</span>
    );
  }
}

UsernameById.propTypes = {
  id: PropTypes.string.isRequired,
  isTyping: PropTypes.bool,
};

export default createContainer((props) => {
  Meteor.subscribe('users');
  return {
    user: Meteor.users.find({ _id: props.id }).fetch()[0],
  };
}, UsernameById);