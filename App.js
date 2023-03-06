import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchBar}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  searchBar: {
    backgroundColor: "blue",
    padding: 20,
    justifyContent: "center",
  },
  list: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "flex-start",
    padding: 16,
  },
});
