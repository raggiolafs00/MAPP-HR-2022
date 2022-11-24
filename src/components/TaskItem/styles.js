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
    checkmark: {
        position: "absolute",
        right: 10,
        top: 10,
        fontSize: 16,
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