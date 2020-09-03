import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResulsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage, loading] = useResults();

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
        {loading ? 
        <View style={styles.loadingSpinner}>
          <ActivityIndicator size="large" color="#FFF" />
        </View> : null}
        
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
  },
  loadingSpinner: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
});

export default SearchScreen;