import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'

export default function TaskItem ({ onLongPress, isSelected, onMoveTask, id, name, description, isFinished, onTaskPress, finishTask }) {
  return (
        <TouchableOpacity
        onLongPress={() => onLongPress(id)}
        onPress={() => onTaskPress(id)}>
        {
            isSelected
              ? <AntDesign name="checkcircleo" style={styles.checkmark} />
              : <></>
        }
    <View style={[styles.taskItem, isSelected ? { opacity: 0.5 } : {}]} >
        <TouchableOpacity
        style={styles.checkbox}
        onPress={() => finishTask(id)}>
        {
            isFinished
              ? <Text style={styles.check}>✓</Text>
              : <></>
        }
        </TouchableOpacity>

        <Text style={styles.nameText}>{name}</Text>

        <Text style={styles.descriptionText}>{description}</Text>
        </View>
        </TouchableOpacity>
  )
}
