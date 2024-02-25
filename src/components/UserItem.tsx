import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import Avatar from "./Avatar";
import Typography from "./Typography";

type Value = string | null | undefined;
interface IUserItem {
  name: Value;
  role: Value;
}

const UserItem = ({ name, role }: IUserItem) => {
  return (
    <View style={styles.container} testID="userItem">
      <Avatar name={name || ""} />
      <View style={styles.content}>
        <Typography variant={Typography.Variants.BodyBold}>{name}</Typography>
        <Typography>{role}</Typography>
      </View>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: hp("1%"),
    gap: wp("3%"),
  },
  content: {
    display: "flex",
    gap: wp("0.5%"),
    justifyContent: "center",
  },
});
