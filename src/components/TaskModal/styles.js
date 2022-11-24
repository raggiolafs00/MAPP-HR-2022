import {StyleSheet} from 'react-native';
import { lightGray } from '../../styles/colors';

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
    }
})