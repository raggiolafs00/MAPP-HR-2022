import { StyleSheet } from "react-native";
import { darkerBlue, graniteGray, white} from "../../styles/colors";


export default StyleSheet.create({

    taskItem: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        backgroundColor: darkerBlue,
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
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: white,
        textAlign: "center",
    }
});