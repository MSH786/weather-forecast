import {TextInput} from "react-native";

import {styles} from "./textField.styles";

const TextField = (props: ITextField) => {
  return (
    <TextInput
      placeholder="Search City"
      placeholderTextColor="lightgray"
      style={styles.input}
      {...props}
    />
  );
};

export default TextField;
