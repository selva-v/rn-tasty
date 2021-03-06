import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      {!result.image_url ? 
        <Image source={require('../../assets/image-na.png')} style={styles.image} />
        :
        <Image source={{ uri: result.image_url}} style={styles.image} />
      }
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    //marginVertical: 5
  }
});

export default ResultDetails;