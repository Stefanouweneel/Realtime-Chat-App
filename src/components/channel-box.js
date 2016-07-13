import React from 'react';
import _ from 'lodash';
import ColorSet from '../styles/ColorSet';
import Fonts from '../styles/Fonts';

class ChannelBox extends React.Component {
  constructor(props) {
    super(props);

    this.baseStyle = _.merge({
      backgroundColor: ColorSet.lightGrey,
      color: ColorSet.fontColor,
      fontFamily: Fonts.sansSerif,
      boxShadow: "1px -1px 5px rgba(0,0,0,0.3)",
      paddingLeft: 10,
      paddingBottom: 2,
    }, props.style || {});
  }

  render() {
    return (
      <div style={ this.baseStyle }>
        { this.props.children }
      </div>
    );
  }
}

export default ChannelBox;
