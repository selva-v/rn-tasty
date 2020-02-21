import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term, // term: term - is shorten with ES2015
          limit: 50,
          location: 'Singapore'
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong')
    }
  }

  return (
    <View style={styles.searchScreen}>
      <SearchBar
        term={term}
        onTermChange={setTerm} //newTerm => setTerm(newTerm) - shorten with ES2015
        onTermSubmit={searchApi}
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