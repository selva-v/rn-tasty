import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm, // 'term: term' can be shorten as 'term' with ES2015 if it's not receiving any argument
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

  return [searchApi, results, errorMessage];
};