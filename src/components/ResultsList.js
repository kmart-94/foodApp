import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


function RestaurantCard({name}) {
  return (
    <View style={styles.card}>
      <Text>
        {name}
      </Text>
    </View>
  );
}

function ResultsList({title, results}) {
  //title
  //array of Results
    //broken into restaurant image, name. stars/rating, # of reviews

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <RestaurantCard name={item.name}/>}
        showHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  card: {
    margin: 10
  }
});

export default ResultsList;
