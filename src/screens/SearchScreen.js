import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

function SearchScreen() {

  const [term, setTerm] = useState('');
  const {search, results, error} = useResults();

  function filterResultsByPrice(price) {
    return results.filter(result => {
      return result.price === price;
    });
  }

  return (
    <>
      <View style={styles.searchContainer}>
        <SearchBar onChange={setTerm} term={term} onSubmit={() => search(term)} />
        {error ? <Text>{error}</Text> : null}
      </View>
      <ScrollView>
        <ResultsList title= "Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title= "A Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title= "Big Spender" results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
    margin: 15
  }
})

export default SearchScreen;
