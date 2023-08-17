import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function MyButton({title}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    margin: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize:15
  },
});

export default MyButton;
