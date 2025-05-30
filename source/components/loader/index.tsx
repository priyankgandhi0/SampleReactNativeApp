import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../theme/colors';

type LoaderProps = {
  isLoading: boolean;
};

type LoaderState = {
  isLoading: boolean;
};

class Loader extends Component<LoaderProps, LoaderState> {
  constructor(props: LoaderProps) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
    };
  }

  static getDerivedStateFromProps(
    nextProps: LoaderProps,
    prevState: LoaderState,
  ): Partial<LoaderState> | null {
    if (nextProps.isLoading !== prevState.isLoading) {
      return {
        isLoading: nextProps.isLoading,
      };
    }
    return null;
  }

  render() {
    return (
      this.state.isLoading && (
        <View style={styles.loading}>
          <View style={styles.loadingWrap}>
            <ActivityIndicator animating={this.state.isLoading} size="small" color={Colors.black} />
          </View>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  } as ViewStyle,
  loadingWrap: {
    backgroundColor: Colors.white,
    height: moderateScale(80),
    width: moderateScale(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  } as ViewStyle,
});

export default Loader;
