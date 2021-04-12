import React from 'react';
import styles from '../../styles/Layout.module.css';

const MainContainer = ({ children }) => {
    return (
        <div className={`${styles.flexColumn} ${styles.responsiveContainer}`}>
            {children}
        </div>
    );
};

export default MainContainer;
