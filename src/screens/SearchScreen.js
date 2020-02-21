import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.searchScreen}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log(term)}
      />
      <Text>{term}</Text>
      
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