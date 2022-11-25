import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import ListItem from '../ListItem';

export default function ListsList({ listlists, selectedLists, onLongPress, navigation }) {
    return (
        <View style={styles.ListsContainer}>
            <FlatList
                data={listlists}
                renderItem={({ item: {id, name, color, boardId} }) => (
                    <ListItem
                        onLongPress={onLongPress}
                        isSelected={selectedLists.indexOf(id) !== -1}
                        id={id}
                        name={name}
                        color={color}
                        boardId={boardId}
                        navigation={navigation}
                        lists={listlists}
                        />
                )}
                keyExtractor={(lists) => lists.id} />
        </View>
    );
}
