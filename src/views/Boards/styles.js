import { StyleSheet } from "react-native";
import { darkerBlue, graniteGray } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding : 20,
        backgroundColor: darkerBlue,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    logo: {
        width: 200,
        height: 200,
    },
});