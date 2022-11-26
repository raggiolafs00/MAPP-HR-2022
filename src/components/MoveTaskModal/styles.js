import { StyleSheet, Dimensions } from 'react-native'
import { lightGray } from '../../styles/colors'

const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
  input: {
    borderwidth: 1,
    borderColor: lightGray,
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  },

  icon: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: lightGray,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },

  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.3,
    borderRadius: 10,
    width: winWidth - 100,
    backgroundColor: 'white',
    padding: 40
  }
})
