import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import { client } from "./src/graphql/client";
import Home from "./src/pages/home/Home";

export default function AppRoot() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
