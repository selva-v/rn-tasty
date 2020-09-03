import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const searchApi = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm, // 'term: term' can be shorten as 'term' with ES2015 if it's not receiving any argument
          limit: 50,
          location: 'Singapore'
        }
      });
      setResults(response.data.businesses);
      setLoading(false);
    } catch (e) {
      setErrorMessage('Something went wrong');
      setLoading(false);
    }
  }

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage, loading];
};