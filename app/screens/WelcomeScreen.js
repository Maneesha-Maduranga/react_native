import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import MyButton from "../components/MyButton";
import MySafeArea from "../components/MySafeArea";

const WelcomeScreen = () => {
  return (
    <MySafeArea>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.logoUnder}>Sell Anything You Want</Text>
        </View>
        <View style={styles.buttonContainer}>
          <MyButton title='Login' />
          <MyButton title='Register' />
        </View>
      </View>
    </MySafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  logoUnder: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default WelcomeScreen;
