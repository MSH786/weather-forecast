import React, {useState} from "react";
import {View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import TextField from "../TextField";
import {styles} from "./header.styles";

const Header = ({onResetSearch, value, ...rest}: IHeader) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.searchContainer}>
      <View
        style={[
          styles.searchWrapper,
          {
            backgroundColor: showSearch
              ? "rgba(255, 255, 255, 0.2)"
              : "transparent",
          },
        ]}
      >
        <View style={styles.inputWrapper}>
          {showSearch ? <TextField value={value} {...rest} /> : null}
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity
            onPress={!value ? handleSearchToggle : onResetSearch}
            style={styles.searchButton}
          >
            <Icon name={!value ? "search" : "close"} size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
