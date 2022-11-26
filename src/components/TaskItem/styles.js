import { StyleSheet } from "react-native";
import { black, darkerBlue, graniteGray, white, yellow} from "../../styles/colors";


export default StyleSheet.create({

    taskItem: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "left",
        borderWidth: 2,
        backgroundColor: white,
        borderColor: "#000",
        margin: 5,
        padding: 5,
    
    },

    check: {
        alignSelf: "center"
    },

    checkmark: {
        position: "absolute",
        right: 10,
        top: 10,
        fontSize: 16,
    },

    checkbox: {
        width: 25, 
        height: 25, 
        borderWidth: 2,
        marginRight: 5
    }, 

    nameText: {
        fontSize: 20,
        fontWeight: "bold",
        color: black,
        textAlign: "left",
    },
    descriptionText: {
        fontSize: 16,
        color: black,
        textAlign: "left",
    }

});