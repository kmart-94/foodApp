import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, Image, FlatList} from "react-native";
import useSearchById from "../hooks/useSearchById";


function RestaurantShowScreen({navigation}) {
  const id = navigation.getParam('id');
  const {search, result, error} = useSearchById();

  useEffect(() => {
    search(id);
  }, []);


  if (!result) {
    return <Text>Loading...</Text>;
  }
  else {
    return (
      <>
        <Text> {result.name} </Text>
        <FlatList
          data={result.photos}
          keyExtractor={(item) => item}
          renderItem={({item}) => <Image style={styles.image} source={{uri: item}} /> }
          showsVerticalScrollIndicator={false}
        />
      </>
    );
  }

}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 3/2,
    width: 200,
    borderRadius: 4
  }
});

export default RestaurantShowScreen;
