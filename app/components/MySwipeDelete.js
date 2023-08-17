import { ListItem,Button,Avatar,Icon } from "@rneui/themed";

function MySwipeDelete({item, onPress}) {
  return (
    <ListItem.Swipeable
      leftWidth={80}
      rightWidth={90}
      minSlideWidth={40}
      rightContent={(action) => (
        <Button
          containerStyle={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
          }}
          type='clear'
          icon={{ name: "delete-outline" }}
          onPress={onPress}
        />
      )}
    >
       <Avatar
      rounded
      source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
    />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}

export default MySwipeDelete;
