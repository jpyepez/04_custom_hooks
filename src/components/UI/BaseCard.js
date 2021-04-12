import React from 'react';
import cardStyles from '../../styles/Cards.module.css';
import styles from '../../styles/Layout.module.css';
import PropTypes from 'prop-types';

const BaseCard = ({ children, header, classes }) => {
    let cls = [cardStyles.card];

    if (classes && classes.length > 0) {
        const propClasses = [...classes].map((el) => styles[el]);
        cls = [...cls, ...propClasses].join(' ');
    }

    return (
        <div className={cls}>
            {header ? header : null}
            {children}
        </div>
    );
};

BaseCard.propTypes = {
    classes: PropTypes.array,
};

export default BaseCard;
