import React from "react"
import Proptypes from "prop-types";
import { TouchableHighlight, View, Text} from "react-native";
import styles from "./styles";

const Toolbar = ({ hasSelectedBoards, onAdd }) => (
    <View style={styles.toolbar}>
        <TouchableHighlight
            onPress={() => onAdd()} 
            style={styles.toolbarAction}>
            <Text style={styles.toolbarActionText}>Add board</Text>
        </TouchableHighlight>
        <TouchableHighlight 
        style={styles.toolbarAction}
        disabled={!hasSelectedBoards}>
            <Text style={[styles.toolbarActionText, !hasSelectedBoards ? 
                {color: 'rgba(155, 155, 155, .5)' } : {}]}>Delete board</Text>
        </TouchableHighlight>
    </View>
);
Toolbar.propTypes = {
    hasSelectedBoards: Proptypes.bool.isRequired,
    onAdd: Proptypes.func.isRequired
};

export default Toolbar;
