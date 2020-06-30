import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, Image, FlatList} from "react-native";
import yelp from "../api/yelp";

function RestaurantShowScreen({navigation}) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  async function getResult(id) {
    try {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    catch(err) {
      console.log("whoops");
    }
  }

  useEffect(() => {
    getResult(id);
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
