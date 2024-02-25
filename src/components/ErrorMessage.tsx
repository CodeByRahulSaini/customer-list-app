import { StyleSheet } from "react-native";

import Typography from "./Typography";
import { defaults } from "../theme";

interface IErrorMessage {
  message: string | undefined;
}

const ErrorMessage = ({ message }: IErrorMessage) => {
  return message ? (
    <Typography style={styles.textStyle} variant={Typography.Variants.BodyBold}>
      {message}
    </Typography>
  ) : null;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  textStyle: {
    color: defaults.colors.error,
  },
});
