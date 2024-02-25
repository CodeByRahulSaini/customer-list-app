import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import {
  Typography,
  UserItem,
  RadioGroup,
  TextInput,
  ErrorMessage,
  Section,
} from "../../components";
import { useListZellerCustomersQuery } from "../../graphql/__generated__/schema";
import { defaults } from "../../theme";

const roles = [
  {
    label: "Admin",
    value: "Admin",
  },
  {
    label: "Manager",
    value: "Manager",
  },
];

export default function App() {
  const [role, setRole] = useState(roles[0].value);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefetching, setRefetching] = useState(false);
  const {
    loading,
    error,
    data: listUsers,
    refetch,
  } = useListZellerCustomersQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      filter: { role: { eq: role }, name: { contains: searchQuery } },
    },
  });

  useEffect(() => {
    // Have to use isRefetching state to fix this issue https://github.com/TanStack/query/issues/2380
    if (!loading) setRefetching(false);
  }, [loading]);

  const onSelectRole = (role: string) => {
    setSearchQuery("");
    setRole(role);
  };

  return (
    <View style={styles.container}>
      <Section heading="User Types">
        <RadioGroup options={roles} onChange={onSelectRole} selected={role} />
      </Section>
      <Section style={styles.section} heading={`${role} Users`}>
        <TextInput
          placeholder="Search by name"
          value={searchQuery}
          onChangeText={(text: string) => {
            setSearchQuery(text);
          }}
        />
        <ErrorMessage message={error?.message} />
        <FlatList
          refreshing={isRefetching}
          onRefresh={() => {
            setRefetching(true);
            refetch();
          }}
          ListEmptyComponent={
            !error && !loading ? (
              <Typography>
                There are no users. Try a different role or search.
              </Typography>
            ) : null
          }
          data={listUsers?.listZellerCustomers?.items}
          renderItem={({ item }) => (
            <UserItem name={item?.name} role={item?.role} />
          )}
        />
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaults.colors.background,
    paddingHorizontal: defaults.styles.contentPaddingHorizontal,
    paddingVertical: hp("2%"),
  },
  radioButton: {
    width: "100%",
    padding: "2%",
  },
  selectedRadioButton: {
    borderRadius: wp("2%"),
    backgroundColor: defaults.colors.accent,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  section: { flex: 1 },
  totalContainer: { marginBottom: hp("2%"), gap: hp("1%") },
  errorText: {
    padding: wp("2%"),
    color: defaults.colors.textContrast,
  },
});
