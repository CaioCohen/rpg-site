// src/context/DataProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const DATA_URL = "https://raw.githubusercontent.com/CaioCohen/CorruptedDominion/refs/heads/main/src/assets/documents/rpg-data.json";

const DataContext = createContext({
  data: null,
  loading: true,
  error: null,
  campanhaSelecionada: null,
  setCampanhaSelecionada: () => {}
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ This must be inside the component
  const [campanhaSelecionada, setCampanhaSelecionada] = useState(
    sessionStorage.getItem("campanhaSelecionada")
  );

  useEffect(() => {
    fetch(DATA_URL)
      .then(res => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{
      data,
      loading,
      error,
      campanhaSelecionada,
      setCampanhaSelecionada
    }}>
      {children}
    </DataContext.Provider>
  );
};
