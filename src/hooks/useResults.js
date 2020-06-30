import React, {useState, useEffect} from 'react';
import yelp from "../api/yelp";

export default () => {

  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  async function searchTerm(term) {

    try {
      const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: term,
            location: 'San Francisco'
          }
        }
      );
      setResults(response.data.businesses);
    } catch (err) {
      setError('Something went wrong');
    }
  }

  useEffect(() => {
    searchTerm('');
  }, []);

  return {search: searchTerm, results: results, error: error};
};
