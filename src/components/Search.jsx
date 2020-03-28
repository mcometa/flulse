import React, { useState } from 'react';

const Search = () => {
  const [tag, setTag] = useState('');

  return (
    <div className="toolbar-search">
      <input
        type="text"
        defaultValue={tag}
        className="searchbox"
        placeholder="Search then press enter..."
        onChange={(e) => setTag(e.currentTarget.value)}
        data-testid="search-input"
      />
    </div>
  );
};

export default Search;
