import React from 'react';
import styles from '../styles/ActionButton.module.scss'


const ActionButtons = () => {
  return (
    <div className={styles.ActionButtons}>
        <div className={styles.searchContainer}>
            <img src="./images/search.png" alt="Search" className={styles.searchIcon} />
            <input 
            type="text" 
            placeholder="    Search..." 
            className={styles.searchBar} 
            />
        </div>
        <div className={styles.controlButton}>
            <img src="./images/filter.svg" alt='filter'/>
            <p>Filter</p>
            <img src="./images/dropdown.svg" alt='filter'/>
        </div>
        <div className={styles.controlButton}>
            <img src="./images/sort.svg" alt='filter'/>
            <p>Sort</p>
        </div>
        <div className={styles.controlButton}>
            <img src="./images/import.svg" alt='filter'/>
            <p>Import</p>
        </div>
        <div className={styles.controlButton}>
            <img src="./images/export.svg" alt='filter'/>
            <p>Export</p>
        </div>
    </div>
  );
};

export default ActionButtons;
