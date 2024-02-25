import { TextStyle } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const colors = {
  primary: "#0070cc",
  accent: "#e8f3fa",
  error: "red",
  background: "#fff",
};

export enum TextVariants {
  H6 = "h6",
  Body = "body",
  BodyBold = "bodyBold",
}

interface TextVariant {
  fontSize: TextStyle["fontSize"];
  fontWeight: TextStyle["fontWeight"];
}

const textVariants: Record<TextVariants, TextVariant> = {
  // Can add more variants like h5, h4, h3, h2, h1, subtitle1, subtitle2
  [TextVariants.H6]: {
    fontSize: hp("1.9%"),
    fontWeight: "700",
  },
  [TextVariants.Body]: {
    fontSize: hp("1.55%"),
    fontWeight: "normal",
  },
  [TextVariants.BodyBold]: {
    fontSize: hp("1.55%"),
    fontWeight: "500",
  },
};

const styles = {
  contentPaddingHorizontal: wp("5%"),
  borderRadius: wp("2%"),
};

export { colors, textVariants, styles };
