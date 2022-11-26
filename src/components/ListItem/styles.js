import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ListItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        margin: 5,
        padding: 10,
        
        
    },
    BaseText: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        padding : 10,
    },
    checkmark: {
        position: "absolute",
        right: 10,
        top: 10,
        fontSize: 16,
    }
})