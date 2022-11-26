import { StyleSheet } from 'react-native'
import { black, lightGray } from '../../styles/colors'

export default StyleSheet.create({
  input: {
    borderwidth: 1,
    borderColor: black,
    padding: 20,
    fontSize: 18,
    borderRadius: 6
  },
  container: {
    flex: 1,
    backgroundColor: lightGray
  }
})
