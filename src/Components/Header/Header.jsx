import React from 'react';
import SearchInput from '../UI/SearchInput/SearchInput';
import styles from './Header.module.scss'
import Profile from './Profile';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
            <a href="">
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
						alt='Netflix'
						height='35'
						width='112' />
            </a>
            <SearchInput/>
            </div>
            <Profile/>
        </div>
    );
};

export default Header;