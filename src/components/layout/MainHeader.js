import React from 'react';
import styles from '../../styles/Layout.module.css';

const MainHeader = ({ children }) => {
    return (
        <header
            className={`${styles.flexRow} ${styles.borderBot} ${styles.flexRowCenter}`}
        >
            {children}
        </header>
    );
};

export default MainHeader;
