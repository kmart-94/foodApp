import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
  console.log(results);

  return (
    <View>
      <View style={styles.searchContainer}>
        <SearchBar onChange={setTerm} term={term} onSubmit={() => search(term)} />
        {error ? <Text>{error}</Text> : null}
      </View>
      <ResultsList title= "Cost Effective" results={filterResultsByPrice('$')} />
      <ResultsList title= "A Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultsList title= "Big Spender" results={filterResultsByPrice('$$$')} />
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
