import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RestaurantCard from "./RestaurantCard";



function ResultsList({title, results}) {

  if (results.length) {
    return (
      <View style={styles.horizontalRule}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RestaurantCard result={item}/>}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
  else return null;

}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10
  },
  horizontalRule: {
    borderBottomWidth: 1
  }
});

export default ResultsList;
