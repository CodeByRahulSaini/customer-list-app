import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import Typography from "./Typography";
import { defaults } from "../theme";

interface IOption {
  label: string;
  value: string;
}

export interface IRadioGroup {
  onChange: (value: IOption["value"]) => void;
  options: IOption[];
  selected: IOption["value"];
}

const RadioGroup = ({ selected, onChange, options }: IRadioGroup) => {
  return (
    <View style={styles.container}>
      {options.map(({ label, value }) => (
        <TouchableOpacity
          key={value}
          style={[
            styles.radioItem,
            selected === value
              ? { backgroundColor: defaults.colors.accent }
              : {},
          ]}
          onPress={() => selected !== value && onChange(value)}
        >
          <>
            <Ionicons
              name={selected === value ? "radio-button-on" : "radio-button-off"}
              size={wp("6%")}
              color={defaults.colors.primary}
            />
            <Typography>{label}</Typography>
          </>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioGroup;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: hp("0.3%"),
  },
  radioItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: wp("1.5%"),
    padding: "2%",
    paddingVertical: "2.5%",
    borderRadius: defaults.styles.borderRadius,
  },
});
