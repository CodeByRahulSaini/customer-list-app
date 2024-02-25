import { View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import Typography from "./Typography";
import { defaults } from "../theme";

interface IAvatar {
  name: string;
}

const Avatar = ({ name }: IAvatar) => {
  return (
    <View style={styles.container}>
      <Typography style={styles.textStyle} variant={Typography.Variants.H6}>
        {name.charAt(0).toUpperCase()}
      </Typography>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    width: wp("10%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaults.colors.accent,
    borderRadius: defaults.styles.borderRadius,
  },
  textStyle: {
    color: defaults.colors.primary,
  },
});
