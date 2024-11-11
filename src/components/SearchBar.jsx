import React, { useState } from 'react';
import '../css/SearchBar.css'

function SearchBar({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleInputChange = async (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    
    if (newTitle.length >= 3) { 
      onSearch({ title: newTitle });
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Digite o título do filme ou série"
        value={title}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;

