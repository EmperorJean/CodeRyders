import { useState, useEffect } from 'react';

const API_ROOT = 'https://coderyders.onrender.com';

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
