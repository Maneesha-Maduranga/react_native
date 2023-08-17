import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MySafeArea from "../components/MySafeArea";

const AppScreen = () => {
  return (
    <MySafeArea>
      <View style={styles.container}>
        <View style={styles.characterContainer}>
          <TouchableOpacity style={styles.character}>
            <MaterialIcons name='delete' size={40} color='black' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.character}>
            <MaterialIcons name='close' size={40} color='black' />
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={require("../assets/welcome.jpg")} />
      </View>
    </MySafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  characterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  character: {
    backgroundColor: "white",
    borderRadius: 32,
    padding: 8,
  },
  image: {
    width: "80%",
    height: "80%", // set the image height to 60% of the screen height
    alignSelf: "center",
  },
});

export default AppScreen;
