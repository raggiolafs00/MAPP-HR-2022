import React from "react"
import Proptypes from "prop-types";
import { TouchableHighlight, View, Text} from "react-native";
import styles from "./styles";

const Toolbar = ({ hasSelectedBoards, name1, name2, onAdd, onRemove}) => (
    <View style={styles.toolbar}>
        <TouchableHighlight
        onPress={() => onAdd()}  
        style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>{name1}</Text>
        </TouchableHighlight>
        <TouchableHighlight 
        onPress = {() => onRemove()}
        style={styles.toolbarAction}
        disabled={!hasSelectedBoards}>
            <Text style={[styles.toolbarActionText, !hasSelectedBoards ? 
                {color: 'rgba(155, 155, 155, .5)' } : {}]}>{name2}</Text>
        </TouchableHighlight>
    </View>
);
Toolbar.propTypes = {
    hasSelectedBoards: Proptypes.bool.isRequired,
    onAdd: Proptypes.func.isRequired
};

export default Toolbar;
