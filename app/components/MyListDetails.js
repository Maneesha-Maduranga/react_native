import { color } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MyIcon from "./MyIcon";

function MyListDetails({
  image,
  title,
  subtitle,
  backgroundColor,
  color,
  size,
  name,
}) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.photo} source={image} />}
      {name && (
        <View style={styles.icon}>
          <MyIcon
            name={name}
            backgroundColor={backgroundColor}
            color={color}
            size={size}
          />
        </View>
      )}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 15,
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginBottom:5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});

export default MyListDetails;
