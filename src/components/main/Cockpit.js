import React, { useState } from 'react';
import BaseCard from '../UI/BaseCard';
import BaseInput from '../UI/BaseInput';
import Display from './Display';

const Cockpit = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue === '') {
            console.log(`can't be empty`);
        } else {
            setQuery(inputValue.toLowerCase());
            setInputValue('');
        }
    };

    return (
        <BaseCard classes={['m1', 'borderBot']}>
            <form onSubmit={handleSubmit}>
                <BaseInput
                    label="Search PokeAPI"
                    id="search"
                    classes={['mb1', 'responsiveInput']}
                    value={inputValue}
                    setValue={setInputValue}
                />
            </form>
            <Display query={query} />
        </BaseCard>
    );
};

export default Cockpit;
