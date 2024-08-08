/* eslint-disable prettier/prettier */

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' },
    { id: 11, title: 'Item 11' },
    { id: 12, title: 'Item 12' },
    { id: 13, title: 'Item 13' },
    { id: 14, title: 'Item 14' },
];

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {
            data.map((item) => (
                <View key={item.id} style={styles.gridItem}>
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#000',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    gridItem: {
      backgroundColor: '#ff6f61',
      padding : 20,
      marginBottom: 10,
      width: '48%',
      height: 100,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});
export default Grid;
