import React from 'react';
import Message from './message';
import MessageModel from '../models/MessageModel';
import ChannelBox from '../components/channel-box'

class Channel extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }

    this.model = new MessageModel();
    this.model.subscribe(this.updateMessages.bind(this));
  }

  updateMessages() {
    this.setState({
      messages: this.model.resources
    }, this.setScrollTop.bind(this));
  }

  setScrollTop() {
    window.scrollTo(0,document.body.scrollHeight);
  }

  render() {
    return (
      <ChannelBox>
        {this.state.messages.map((message) => {
          return <Message key={ message._id } { ...message } />;
        })}
      </ChannelBox>
    );
  }
}

export default Channel;
