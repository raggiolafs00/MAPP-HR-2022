import React from "react";
import { View, FlatList } from "react-native";
import TaskItem from "../TaskItem";
import styles from "./styles";

export default function TaskList({ tasks, selectedTasks, onLongPress}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item: {id, listId, name, description, isFinished} }) => (
          <TaskItem 
            onLongPress={onLongPress}
            isSelected={selectedTasks.indexOf(id) !== -1} 
            id ={id}
            name ={name} 
            description = {description}
            isFinished = {isFinished}
           />
        )}
        keyExtractor={(tasks) => tasks.id} />
    </View>
  );
}