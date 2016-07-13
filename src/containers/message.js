import React from 'react';
import TimeAgo from 'react-timeago';

class Message extends React.Component {

  render() {
    return (
      <div>
        <p>{ this.props.username }: &nbsp; { this.props.text }</p>
        <h6><TimeAgo date={ this.props.createdAt } /></h6>
      </div>
    );
  }
}

export default Message;
