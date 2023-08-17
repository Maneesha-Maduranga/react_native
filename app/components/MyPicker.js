import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import MyIcon from "./MyIcon";

function MyPicker() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={styles.container}
      >
        <Picker.Item label='camera' value='Camera' />
        <Picker.Item label='phone' value='Phone' />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor:'#f8f8ff',
    
  },
});

export default MyPicker;
