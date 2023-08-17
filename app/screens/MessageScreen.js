import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MyBorder from "../components/MyBorder";

import MySafeArea from "../components/MySafeArea";
import MySwipeDelete from "../components/MySwipeDelete";

let myData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function MessageScreen(props) {
  const [data, setData] = useState(myData);
  const [refresh, setRefresh] = useState(false);

  const deleteItem = (id) => {
    console.log(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <MySafeArea>
      <FlatList
        data={myData}
        renderItem={({ item }) => (
          <MySwipeDelete
            item={item}
            onPress={() => {
              deleteItem(item.id);
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent=<MyBorder />
        refreshing={refresh}
        onRefresh={() => {
          setData([
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Third Item",
            },
          ]);
        }}
      />
    </MySafeArea>
  );
}

export default MessageScreen;
