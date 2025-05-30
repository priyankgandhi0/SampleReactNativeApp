import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const CommonTextInput = (props: any) => {
  const {
    title,
    titleStyle,
    isMandatory,
    icon,
    placeHolder,
    onChangeText,
    onSubmitEditing,
    refValue,
    keyboardType, //enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
    returnKeyType, //enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
    secureTextEntry,
    editable,
    value,
    autoCapitalize,
    maxLength,
    isVisibleTextLimit,
    rightIcon,
    onPressRightIcon,
    contextMenuHidden = false,
    isMultiline = false,
    height = moderateScale(42),
    iconSize = moderateScale(20),
    iconStyle,
    containerStyle,
    mainViewStyle,
    rightIconStyle,
    pointerEvents = 'auto',
    textInputStyle,
    placeholderTextColor,
    autoFocus = false,
    numberOfLines = 1,
  } = { ...props };

  const [inputTextLength, setInputTextLength] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  // const displayError = (message: string) => {
  //   setErrorMessage(message);
  // };

  return (
    <View style={[containerStyle, { gap: moderateScale(5) }]} pointerEvents={pointerEvents}>
      {title !== undefined && (
        <View style={{ flexDirection: 'row' }}>
          <Text style={[Fonts.NUNITO_REGULAR_14, titleStyle]}>{title}</Text>
          {isMandatory === true && isMandatory !== undefined && (
            <Text style={[{ color: Colors.red }]}>*</Text>
          )}
        </View>
      )}
      <View
        style={[
          styles.mainView,
          {
            height: height,
          },
          mainViewStyle,
        ]}>
        {icon !== undefined && (
          <Image
            source={icon}
            resizeMode="contain"
            style={[{ width: iconSize, marginRight: 10 }, iconStyle]}
          />
        )}
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={placeholderTextColor || Colors.placeholder_767D85}
          style={[
            Fonts.NUNITO_REGULAR_16,
            styles.textInputStyle,
            isMultiline ? { height: '80%' } : { height: '100%' },
            textInputStyle && { ...textInputStyle },
          ]}
          ref={refValue}
          multiline={isMultiline}
          // textAlign={'left'}
          textAlignVertical={isMultiline ? 'top' : 'center'}
          onSubmitEditing={() => onSubmitEditing()}
          onChangeText={textValue => {
            onChangeText(textValue);
            setInputTextLength(textValue?.length);
          }}
          contextMenuHidden={contextMenuHidden}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          editable={editable}
          value={value}
          autoCapitalize={keyboardType === 'email-address' ? 'none' : autoCapitalize}
          maxLength={maxLength}
          autoFocus={autoFocus}
          numberOfLines={numberOfLines}
          {...props}
        />
        {isVisibleTextLimit !== undefined && (
          <Text style={[{ color: Colors.black_171823, marginLeft: moderateScale(8) }]}>
            {inputTextLength}/{maxLength}
          </Text>
        )}
        {rightIcon !== undefined && (
          <TouchableOpacity onPress={() => onPressRightIcon()}>
            <Image
              source={rightIcon}
              resizeMode="contain"
              style={[rightIconStyle, { width: iconSize, height: iconSize }]}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(10),
    backgroundColor: Colors.white,
  },
  textInputStyle: {
    color: Colors.black_171823,
    flex: 1,
  },
});

export default CommonTextInput;
