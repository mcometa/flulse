import React, { useContext } from 'react';
import './Search.css';

import { AppContext } from '../context/AppContext';

const Search = () => {
  const { query, handleSearchKeyDown, handleSearchChange, handleSearchReset } = useContext(
    AppContext
  );

  return (
    <div className="toolbar-search">
      <input
        type="text"
        value={query}
        className="searchbox"
        placeholder="Search then press enter..."
        onKeyDown={(e) => handleSearchKeyDown(e)}
        onChange={(e) => handleSearchChange(e)}
        data-testid="search-input"
      />

      {query ? (
        <button type="submit" className="reset" onClick={(e) => handleSearchReset(e)}>
          Reset
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
