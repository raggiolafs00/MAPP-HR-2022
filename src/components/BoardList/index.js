import React from "react";
import { View, FlatList } from "react-native";
import BoardItem from "../BoardItem";
import styles from "./styles";

export default function BoardList({ boards, selectedBoards, onLongPress}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        renderItem={({ item: {id, name, thumbnailPhoto} }) => (
          <BoardItem 
            onLongPress={onLongPress}
            isSelected={selectedBoards.indexOf(id) !== -1} 
            id ={id}
            name ={name} 
            thumbnailPhoto ={thumbnailPhoto}
           />
        )}
        keyExtractor={(boards) => boards.id} />
    </View>
  );
}
