import React, {FC} from "react";
import {View, Text, Image} from "react-native";

import {icons} from "../../utils/constants";
import {styles} from "./typographyWithIcon.styles";

const TypographyWithIcon: FC<ITypography> = ({title, icon, flex}) => {
  return (
    <View style={[styles.iconSectionCol, {justifyContent: flex}]}>
      <Image style={styles.iconStyle} source={icons[icon]} />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

export default TypographyWithIcon;
