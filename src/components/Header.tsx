import React from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header  className={styles.header}>
        <div className={styles.headerBody}>
        <h1>Team Members</h1>
        <div className={styles.headerIcons}>
          <div className={styles.icons}>
            <img src="./images/SearchIcon.svg" alt='search-icon'></img>
          </div>
          <div className={styles.icons}>
            <img src="./images/whatsappIcon.svg" alt='search-icon'></img>
          </div>
            <div className={styles.icons}>
              <img src="./images/settingsIcon.svg" alt='search-icon'></img>
            </div>
            <div className={styles.icons}>
              <img src="./images/plusIcon.svg" alt='search-icon'></img>
            </div>
            <div className={styles.icons}>
              <img src="./images/BellIcon.svg" alt='search-icon'></img>
            </div>
            <div className={styles.icons}>
              <img src="./images/profileIcon.png" alt='search-icon'></img>
            </div>
        </div>   
        </div>     

    </header>
  )
}

export default Header