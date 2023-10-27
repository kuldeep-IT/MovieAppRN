import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

const CategoryHeaders = (props: any) => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.White,
          fontFamily: FONTFAMILY.poppins_semibold,
          paddingHorizontal: SPACING.space_32,
          paddingVertical: SPACING.space_15,
          fontSize: FONTSIZE.size_20,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default CategoryHeaders;
