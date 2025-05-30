import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';
const ComingSoon = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}>Coming Soon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.black_101826,
  },
  container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  text: {
    ...Fonts.NUNITO_EXTRABOLD_22,
  },
});

export default ComingSoon;
