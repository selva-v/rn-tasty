import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.searchScreen}>
      <SearchBar
        term={term}
        onTermChange={setTerm} //newTerm => setTerm(newTerm) - shorten with ES2015
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{results.length}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  searchScreen: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default SearchScreen;