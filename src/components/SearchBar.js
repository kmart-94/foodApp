import React from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function SearchBar({onChange, term, onSubmit}) {

  return (
    <View style={styles.background}>
      <View style={styles.itemContainer}>
        <AntDesign style={styles.icon} name="search1" size={30} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder = 'search'
          onChangeText={(text) => onChange(text)}
          value={term}
          autoCapitalize="none"
          autoCorrect={false}
          onEndEditing={onSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
background: {
  backgroundColor: '#E8E8E8',
  height: 50,
  width: Dimensions.get('window').width * 4/5,
  borderRadius: 5,
  justifyContent:'center'
},
itemContainer: {
  flexDirection: 'row'
},
icon: {
  margin: 5
},
textInput: {
  fontSize: 24,
  flex: 1,
  padding: 5
}
});

export default SearchBar;
