import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {withNavigation} from "react-navigation"

function RestaurantCard({result, navigation}) {
  const {name, rating, image_url, review_count, id} = result;
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Restaurant', {id: id})} >
      <Image style={styles.image} source= {{uri: image_url}}/>
      <Text>
        {name}
      </Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10
  },
  image: {
    aspectRatio: 3/2,
    width: 200,
    borderRadius: 4
  }
});

export default withNavigation(RestaurantCard);
