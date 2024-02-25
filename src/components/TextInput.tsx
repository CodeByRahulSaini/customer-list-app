import { StyleSheet, TextInput, TextInputProps } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { defaults } from "../theme";

const _TextInput = ({ style, ...props }: TextInputProps) => {
  return (
    <TextInput autoCapitalize="none" style={[styles.input, style]} {...props} />
  );
};

export default _TextInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: defaults.colors.primary,
    ...defaults.textVariants[defaults.TextVariants.Body],
    padding: wp("2.5%"),
    marginVertical: hp("0.7%"),
    borderRadius: defaults.styles.borderRadius,
  },
});
