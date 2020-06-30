import React, {useState, useEffect} from 'react';
import yelp from "../api/yelp";

export default () => {

  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  async function getResult(id) {
    if (id === '') return;
    try {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    catch(err) {
      setError("Something went wrong.")
    }
  }

  return {search: getResult, result: result, error: error};
};
