import React, { useState, useEffect } from 'react';

const useFetch = (name: string, setState: React.Dispatch<any>, options: Object) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      try {
        navigator.geolocation.getCurrentPosition(
          async ({ coords: { latitude: lat, longitude: lon } }) => {
            const res = await fetch(`/api/${name}/${lat}/${lon}`);
            const json = await res.json();
            setResponse(json);
            setState(json);
          }
        );
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [])
  return { response, error };
}
export default useFetch;