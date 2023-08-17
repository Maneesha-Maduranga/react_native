import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import MyButton from "../components/MyButton";
import MyListDetails from "../components/MyListDetails";
import MySafeArea from "../components/MySafeArea";

const ItemDetailsScreen = () => {

  const handleClick = () => {
    console.log("touch");
  }

  return (
    <>
      <MySafeArea>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/welcome.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>Huawei Phone</Text>
            <Text style={styles.price}>$:650</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              vitae esse, dolores ea aut numquam impedit cum minus, vero labore
              libero mollitia dolorem tempora velit.
            </Text>
            <MyButton title='Buy Now' />
          </View>
          <MyListDetails onPress={()=>{console.log('touch')}} />
        </View>
      </MySafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  price: {
    color: "green",
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ItemDetailsScreen;
