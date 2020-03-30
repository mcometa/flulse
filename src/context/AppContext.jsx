import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import API from '../api';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState({
    total: 0,
    totalPages: 0,
  });
  const { children } = props;

  const fetchPhotos = async () => {
    try {
      const { data } = await API.get(`photos`, {
        params: {
          per_page: 9,
        },
      });

      setPhotos(data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const searchPhotos = async () => {
    setLoading(true);

    try {
      const {
        data: { total, total_pages: totalPages, results },
      } = await API.get(`search/photos`, {
        params: {
          query,
        },
      });

      setPhotos(results);
      setLoading(false);

      setSearchData({
        ...searchData,

        total,
        totalPages,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && !!query) {
      searchPhotos();
    }
  };

  const handleSearchChange = (e) => setQuery(e.currentTarget.value);

  const handleSearchReset = (e) => {
    e.preventDefault();
    fetchPhotos();
    setQuery('');
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        query,
        photos,
        handleSearchChange,
        handleSearchKeyDown,
        handleSearchReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.defaultProps = {
  children: null,
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
