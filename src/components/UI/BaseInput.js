import React from 'react';
import styles from '../../styles/Layout.module.css';
import inputStyles from '../../styles/Inputs.module.css';

const BaseInput = (props) => {
    const { type = 'text', label, id, value, setValue, classes } = props;

    const inputClasses = [styles.flexColumn, inputStyles.inputContainer];
    if (value !== '') inputClasses.push(inputStyles.hasValue);

    let inputStrings;
    if (classes && classes.length > 0) {
        const propClasses = [...classes].map((el) => styles[el]);
        inputStrings = [...inputClasses, ...propClasses].join(' ');
    } else {
        inputStrings = inputClasses.join(' ');
    }

    return (
        <div className={inputStrings}>
            <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor={id}>{label ? label : 'Label'}</label>
        </div>
    );
};

export default BaseInput;
