import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function MyTextInput({ icon, ...rest }) {
  return (
    <View style={styles.container}>
      {icon && <FontAwesome name={icon} size={20} style={styles.icon} />}
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: '#333',
    },
    icon: {
      color: '#333',
    },
  });

export default MyTextInput;
