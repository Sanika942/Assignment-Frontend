import React, { useState, useEffect } from "react";

const SearchProject = ({ setSearchTerm }) => {
  const [name, setName] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchTerm(name);
      setIsSearched(!!name.trim());
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [name]);

  const clearSearch = () => {
    setName("");
    setSearchTerm("");
    setIsSearched(false);
  };

  return (
    <div className="mb-3 px-2">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {isSearched && (
          <button className="btn btn-outline-secondary" onClick={clearSearch}>
            ❌
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchProject;
