import React, { Component, PropTypes } from 'react';

export default class NotFoundView extends Component {
  render() {
    return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <h1 style={{fontSize: 48}}>NOT FOUND</h1>
      </div>
      </div>
    );
  }
}
