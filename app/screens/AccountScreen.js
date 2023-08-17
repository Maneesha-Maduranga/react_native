import { View, FlatList, StyleSheet } from "react-native";
import * as React from "react";

import MySafeArea from "../components/MySafeArea";
import MyListDetails from "../components/MyListDetails";
import MyListItem from "../components/MyListItem";
import MyButton from "../components/MyButton";

function AccountScreen() {
  const DATA = [
    {
      title: "Messages",
      icon: "message",
    },
    {
      title: "My Listing",
      icon: "list",
    },
  ];

  return (
    <MySafeArea>
      <MyListDetails
        image={require("../assets/logo.png")}
        title='Maneesha Maduranga'
        subtitle='ManeeshaMaduarnga@gmail.com'
      />
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <MyListItem title={item.title} name={item.icon} />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
      <View style={styles.logout}>
        <MyButton title='Log Out' />
      </View>
    </MySafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  logout: {
    marginTop: 40,
  },
});

export default AccountScreen;
