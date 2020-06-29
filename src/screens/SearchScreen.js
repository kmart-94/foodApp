import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

function SearchScreen() {

  const [term, setTerm] = useState('')
  console.log(term);

  function searchTerm() {
    console.log('searching....');
  }

  return (
    <View>
      <View style={styles.searchContainer}>
        <SearchBar onChange={setTerm} term={term} onSubmit={searchTerm} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
    margin: 15
  }
})

export default SearchScreen;
