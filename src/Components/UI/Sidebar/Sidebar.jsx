import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss'


const menu = [
    'Popular','TV Shows','Films', "My List"
]

const Sidebar = ({isSidebarShow,setIsSidebarShow }) => {

    
    return (
        <div className={styles.sidebar} style={{width: isSidebarShow ? 30 :15}}>
            <button onClick={()=> setIsSidebarShow(true)}>
                <i className={`bx bx-x ${isSidebarShow ? "x" : "border-left"} `}>

                </i>
            </button>
            <ul>

            {menu.map(title => 
                <li><Link to="/">{title}</Link></li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;