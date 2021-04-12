import React from 'react';
import styles from '../../styles/Layout.module.css';
import statStyles from '../../styles/Stat.module.css';

const Stat = ({ stat }) => {
    const statBar = 100 * (stat.base_stat / 200);
    const statColor =
        statBar < 25 ? '#DAEE02' : statBar < 50 ? '#F2D002' : '#7BDD02';

    // use scoped variable for inline styles
    const statProps = {
        '--stat-width': `${statBar}%`,
        '--stat-color': statColor,
    };

    return (
        <div className={`${statStyles.stat} ${styles.flexColumn}`}>
            <p>{`${stat.stat.name}: ${stat.base_stat}`}</p>
            <div className={statStyles.statContainer} style={statProps}>
                {' '}
            </div>
        </div>
    );
};

export default Stat;
