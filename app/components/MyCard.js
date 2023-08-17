import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function MyCard({ title, description , image})  {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    margin:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default MyCard;
