import React, { useState } from "react";

import { ListItem, Button } from "@rneui/themed";
import MyIcon from "../components/MyIcon";
import { View } from "react-native";
import MyListDetails from "../components/MyListDetails";
import MyTextInput from "../components/MyTextInput";
import MyPicker from "../components/MyPicker";



function PractiseViewScreen(props) {

  return (
    <View>
      <MyPicker />
    </View>
  );
}

export default PractiseViewScreen;
