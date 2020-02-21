import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [resultDetails, setResultDetails] = useState(null);
  const id = navigation.getParam('id');

  const getResultDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResultDetails(response.data);
  };

  useEffect(() => {
    getResultDetails(id);
  }, []);

  if (!resultDetails) {
    return null;
  }
  
  return (
    <View>
      <Text>{resultDetails.name}</Text>
      <FlatList
        data={resultDetails.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200
  }
});

export default ResultsShowScreen;