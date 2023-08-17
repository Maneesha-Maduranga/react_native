import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function MyTest({ iconName, text })  {
  return (
    <View style={styles.container}>
      <MaterialIcons name={iconName} size={24} color="black" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default MyTest;
