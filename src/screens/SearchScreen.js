import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResulsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter(result => {
      return result.price === price;
    })
  }

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm} //newTerm => setTerm(newTerm) - shorten with ES2015
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResulsList results={filterResultsByPrice('$')} title="Cost Effective"  />
        <ResulsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResulsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        <ResulsList results={filterResultsByPrice('$$$$')} title="Very Big Spender" />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default SearchScreen;