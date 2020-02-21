import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm, // 'term: term' can be shorten as 'term', with ES2015 if it's not receiving any argument
          limit: 50,
          location: 'Singapore'
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('pasta');
  }, []);

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