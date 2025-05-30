import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';
import { moderateScale } from 'react-native-size-matters';

export default function ButtonView(props: any) {
  const {
    containerStyle,
    textStyle,
    imageStyle,
    title = 'Button',
    imageName,
    imageSize = moderateScale(20),
    onPress,
    disabled,
    buttonStyle,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      disabled={disabled}
      onPress={onPress}>
      <View style={[styles.buttonContainer, buttonStyle]}>
        {imageName != null && (
          <Image
            source={imageName}
            style={[styles.image, { width: imageSize, height: imageSize }, imageStyle]}
          />
        )}
        {title !== '' && <Text style={[Fonts.NUNITO_SEMIBOLD_18, textStyle]}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: moderateScale(42),
    borderWidth: moderateScale(1),
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(5),
  },
  image: {
    resizeMode: 'contain',
  },
});
