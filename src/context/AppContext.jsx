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
      const { data } = await API.get(`photos`);

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

  useEffect(() => {
    // TODO: Find a smarter way to tell this app to fetch photos when query is reset or cleared.
    if (!query) {
      fetchPhotos();
    }
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        loading,
        query,
        photos,
        handleSearchChange,
        handleSearchKeyDown,
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
