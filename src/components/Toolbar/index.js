import React from "react";
import { TouchableHighlight, View, Text} from "react-native";
import styles from "./styles";

const Toolbar = ({ hasSelectedBoards, name1, name2}) => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>{name1}</Text>
        </TouchableHighlight>
        <TouchableHighlight 
        style={styles.toolbarAction}
        disabled={!hasSelectedBoards}>
            <Text style={[styles.toolbarActionText, !hasSelectedBoards ? 
                {color: 'rgba(155, 155, 155, .5)' } : {}]}>{name2}</Text>
        </TouchableHighlight>
    </View>
);

export default Toolbar;
