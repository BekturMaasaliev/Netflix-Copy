import React from 'react';
import styles from './SearchInput.module.scss'

const SearchInput = () => {
    return (
        <div className={styles.search}>
            <div>
                <i className="bx bx-search-alt"></i>
                <input type="text" placeholder="I'm searching for..." />
            </div>
            <i className='bx bx-customize'></i>
        </div>
    );
};

export default SearchInput;