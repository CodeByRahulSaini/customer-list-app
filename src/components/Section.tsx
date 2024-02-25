import { View, StyleSheet, ViewProps } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import Typography from "./Typography";

interface ISection {
  heading: string;
  style?: ViewProps["style"];
  children: React.ReactNode;
}

const Section = ({ heading, style, children }: ISection) => {
  return (
    <View style={[styles.section, style]}>
      <Typography
        style={styles.sectionHeading}
        variant={Typography.Variants.H6}
      >
        {heading}
      </Typography>
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  section: {
    paddingVertical: hp("1%"),
  },
  sectionHeading: {
    paddingVertical: hp("1%"),
  },
});
