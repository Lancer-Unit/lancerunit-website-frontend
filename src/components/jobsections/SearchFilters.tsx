import React, { useState } from 'react';
import styles from './SearchFilters.module.css';

const SearchFilter = ({ onSearch }: { onSearch: (filters: { experience: string, location: string, skills: string }) => void }) => {
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');

  const handleSearch = () => {
    onSearch({ experience, location, skills });
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Experience (e.g. 3+ years)"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className={styles.searchInput}
      />
      <input
        type="text"
        placeholder="Location (e.g. New York)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.searchInput}
      />
      <input
        type="text"
        placeholder="Skills (e.g. React, Node.js)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>Search</button>
    </div>
  );
};

export default SearchFilter;
