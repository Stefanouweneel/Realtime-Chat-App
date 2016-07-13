import React from 'react';
import AppBar from '../components/app-bar';
import ColorSet from '../styles/ColorSet';
import Fonts from '../styles/Fonts';

class Header extends React.Component {
  render() {
    return (
      <AppBar title={ this.props.appName } />
    );
  }
}

export default Header;
