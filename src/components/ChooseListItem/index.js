import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

console.log('lala')
export default function ChooseListItem ({ isSelected, id, name, color, lists, changeTaskListId }) {
  return (
        <TouchableOpacity onPress = {() => changeTaskListId(id)}>
            <View style={[styles.ListItemContainer, { backgroundColor: color }, isSelected ? { opacity: 0.5 } : {}]}>
                <Text style={styles.BaseText}>{name}</Text>
            </View>
        </TouchableOpacity>
  )
}
