import * as React from "react";
import { ListItem, Avatar, Text,Icon } from "@rneui/base";
import { TouchableHighlight } from "react-native";

function MyListItem({title,name}) {
  return (
    <ListItem
      bottomDivider
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onPress={() => console.log("onLongPress()")}
      pad={20}
      topDivider
    >
       <Icon
        reverse
        name={name}
        type='material'
        color='orange'
        size={18}
      />

      <ListItem.Content>
        <ListItem.Title>
          <Text>{title}</Text>
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}

export default MyListItem;
