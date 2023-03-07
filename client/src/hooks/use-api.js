import { useState, useEffect } from 'react';
const  API_URL = "https://coderyders-api.onrender.com"
const API_ROOT = API_URL;

export function useApi({ path } = { path: '' }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}/${path}`)
      .then(res => res.text())
      .then(res => setResponse(res));
  });

  return {
    response
  };
}
