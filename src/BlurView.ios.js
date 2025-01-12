import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, requireNativeComponent } from 'react-native';

class BlurView extends Component {
  setNativeProps = nativeProps => {
    if (this._root) {
      this._root.setNativeProps(nativeProps);
    }
  };

  render() {
    return (
      <NativeBlurView
        ref={e => (this._root = e)}
        {...this.props}
        style={[{ backgroundColor: 'transparent' }, this.props.style]}
      />
    );
  }
}

BlurView.propTypes = {
  blurType: PropTypes.oneOf([
    'dark',
    'light',
    'xlight',
    'prominent',
    'regular',
    'extraDark',
  ]),
  blurAmount: PropTypes.number,
};

BlurView.defaultProps = {
  blurType: 'dark',
  blurAmount: 10,
};

const NativeBlurView = requireNativeComponent('BlurView', BlurView);

module.exports = BlurView;
