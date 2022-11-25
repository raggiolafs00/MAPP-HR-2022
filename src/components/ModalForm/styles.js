import {StyleSheet} from 'react-native';
import { black, lightGray } from '../../styles/colors';

export default StyleSheet.create({
    input: {
        borderwidth: 1,
        borderColor: black,
        alignSelf: 'center',
        padding: 30,
        fontSize: 18, 
        borderRadius: 6
    }, 
    container: {
        flex: 1,
        backgroundColor: lightGray,
    },
    text: {
        fontSize: 12,
        padding: 10,
        color: black,
    },
    icon: {
        fontSize: 25,
        padding: 10,
        alignSelf: 'center',
        color: black,
    }
})