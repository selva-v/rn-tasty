import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBackground}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;