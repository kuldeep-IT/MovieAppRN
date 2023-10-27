import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.main}>
      <TextInput
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.textInput}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
      />

      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          display: 'flex',
          flex: 1,
        }}
        onPress={() => props.searchFunction(searchText)}>
        <MaterialCommunityIcons
          style={{
            color: COLORS.WhiteRGBA75,
            alignItems: 'center',
            justifyContent: 'center',
            padding: SPACING.space_10,
          }}
          name="cloud-search"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    padding: SPACING.space_4,
    margin: SPACING.space_24,
    borderRadius: SPACING.space_24,
  },
  textInput: {
    width: '80%',
    alignSelf: 'flex-start',
    color: COLORS.White,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_medium,
    paddingLeft: SPACING.space_12
  },
});
