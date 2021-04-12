import React from 'react';
import styles from '../../styles/Buttons.module.css';

const BaseButton = ({ children, type = 'submit', classes }) => {
    return (
        <button type={type} className={`${styles.btn} ${classes}`}>
            {children}
        </button>
    );
};

export default BaseButton;
