import React from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";
import BoardItem from "../BoardItem";
import styles from "./styles";

export default function BoardList({ boards, selectedBoards, onLongPress, navigation}, ) {
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
            navigation = {navigation}
           />
        )}
        keyExtractor={(boards) => boards.id} />
    </View>
  );
  BoardList.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      thumbnailPhoto: PropTypes.string,
    })),
    selectedBoards: PropTypes.arrayOf(PropTypes.shape),
    onLongPress: PropTypes.func.isRequired
  };
}
