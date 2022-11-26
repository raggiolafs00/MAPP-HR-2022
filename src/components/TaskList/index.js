import React from 'react'
import { View, FlatList } from 'react-native'
import TaskItem from '../TaskItem'
import styles from './styles'

export default function TaskList ({ tasklists, selectedTasks, onMoveTask, onLongPress, onTaskPress, finishTask }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasklists}
        renderItem={({ item: { id, listId, name, description, isFinished } }) => (
          <TaskItem
            onLongPress={onLongPress}
            onTaskPress={onTaskPress}
            onMoveTask={onMoveTask}
            isSelected={selectedTasks.indexOf(id) !== -1}
            id = {id}
            listId ={listId}
            name ={name}
            description = {description}
            isFinished = {isFinished}
            finishTask = {finishTask}
           />
        )}
        keyExtractor={(tasks) => tasks.id} />
    </View>
  )
}
