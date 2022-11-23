import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import ListItem from '../ListItem';

export default function ListsList({ listlists, navigation }) {
    return (
        <View style={styles.ListsContainer}>
            <FlatList
                data={listlists}
                renderItem={({ item: {id, name, color, boardId} }) => (
                    <ListItem
                        id={id}
                        name={name}
                        color={color}
                        boardId={boardId}
                        navigation={navigation}
                        />
                )}
                keyExtractor={(lists) => lists.id} />
        </View>
    );
}
