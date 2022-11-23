import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import ListItem from '../ListItem';

export default function ListsList({ lists }) {
    return (
        <View style={styles.ListsContainer}>
            <FlatList
                data={lists}
                renderItem={({ item: {id, name, color, boardId} }) => (
                    <ListItem
                        id={id}
                        name={name}
                        color={color}
                        boardId={boardId}
                        />
                )}
                keyExtractor={(lists) => lists.id} />
        </View>
    );
}
