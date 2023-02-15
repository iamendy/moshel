import React from 'react';
import styles from "../styles/NavBar.module.css"
const NavBar = () => {
  return (
    <nav className="nav mt-7">
      <div className="wrapper">
        <div className="m-nav flex justify-between items-center">
          <img src="/img/logo_main.png" alt="logo" className={styles.logo}/>
          <div className={styles.toggle}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={styles.dLinks}>
            <a href="#" className={styles.linkItem}> Home </a>
            <a href="#" className={styles.linkItem}> How it works </a>
            <a href="#" className={styles.linkItem}> Roadmap </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
