import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ViewPropTypes,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  blur: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  }
})

class BlurView extends Component {
  setNativeProps = nativeProps => {
    if (this._root) {
      this._root.setNativeProps(nativeProps);
    }
  };

  render() {
    return (
      <View
        ref={e => (this._root = e)}
        {...this.props}
        style={[styles.blur, this.props.style]}
      >
        {this.props.children}
      </View>
    );
  }
}

BlurView.propTypes = {
  ...(ViewPropTypes || View.propTypes),
  blurAmount: PropTypes.number,
  blurType: PropTypes.oneOf(['dark', 'light', 'xlight']),

  blurRadius: PropTypes.number,
  downsampleFactor: PropTypes.number,
  overlayColor: PropTypes.string,
  viewRef: PropTypes.number,
};

BlurView.defaultProps = {
  blurType: 'dark',
  blurAmount: 10,
};

module.exports = BlurView;
