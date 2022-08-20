import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../UI/SearchInput/SearchInput';
import styles from './Header.module.scss'
import Profile from './Profile';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
            <Link  to="/">
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
						alt='Netflix'
						height='35'
						width='112' />
            </Link>
            <SearchInput/>
            </div>
            <Profile/>
        </div>
    );
};

export default Header;