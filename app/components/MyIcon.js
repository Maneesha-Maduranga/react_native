import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function MyIcon  ({ name, size, backgroundColor, color })  {
  return (
    <View style={[styles.container, { backgroundColor, width: size, height: size }]}>
      <MaterialIcons name={name} size={24} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999, // Use a large value to make it circular
  },
});

export default MyIcon;
