import React from 'react';

const Ability = ({ abilityName, idx }) => {
    const body = `${abilityName[0].toUpperCase()}${abilityName.slice(1)}`;

    const styles = {
        marginTop: '.5rem',
        marginLeft: '1rem',
    };

    return (
        <p style={styles}>
            <strong>{`${idx}.`}</strong> {`${body}`}{' '}
        </p>
    );
};

export default Ability;
