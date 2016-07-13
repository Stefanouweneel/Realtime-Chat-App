import React from 'react';
import Fonts from '../styles/Fonts';
import ColorSet from '../styles/ColorSet';
import UserHeader from '../components/user-header'

class SetUsername extends React.Component {

  onSubmit(event) {
    event.preventDefault();

    let newUser = this.refs.newUsername.value;
    console.log("Registering as: ", newUser);

    this.props.onChange(newUser);
  }

  renderUserForm() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref="newUsername" type="text" placeholder="What's your username?" />
        <input type="submit" value="Register" />
      </form>
    )
  }

  resetUser(event) {
    event.preventDefault();
    this.props.onChange("guest");
  }

  renderGreeting() {
    return (
      <UserHeader>
        <p>Hi, { this.props.username }
        (<a href="#" onClick={ this.resetUser.bind(this) }>not you?</a>)
        </p>
      </UserHeader>
    );
  }

  render() {
    if (this.props.username == "guest") {
      return this.renderUserForm();
    } else {
      return this.renderGreeting();
    }
  }
}

export default SetUsername;
