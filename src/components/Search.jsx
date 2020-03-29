import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';

const Search = () => {
  const { query, handleSearchKeyDown, handleSearchChange } = useContext(AppContext);

  return (
    <div className="toolbar-search">
      <input
        type="text"
        defaultValue={query}
        className="searchbox"
        placeholder="Search then press enter..."
        onKeyDown={(e) => handleSearchKeyDown(e)}
        onChange={(e) => handleSearchChange(e)}
        data-testid="search-input"
      />
    </div>
  );
};

export default Search;
