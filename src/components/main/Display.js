import React, { useEffect } from 'react';
import useFetch from '../../utils/useFetch';
import BaseCard from '../UI/BaseCard';
import Ability from '../main/Ability';
import Stat from '../main/Stat';
import styles from '../../styles/Layout.module.css';

const Display = ({ query }) => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const [data, loading, error, setError] = useFetch(`${baseUrl}${query}`);

    // reset error upon new query
    useEffect(() => {
        setError(null);
    }, [query, setError]);

    if (error) {
        return (
            <BaseCard>
                <p className={styles.textCenter}>Pokémon not found</p>
            </BaseCard>
        );
    } else if (data === null || data.count) {
        return null;
    } else if (loading || !data.name) {
        return (
            <BaseCard>
                <p className={styles.textCenter}>Loading...</p>
            </BaseCard>
        );
    } else {
        const headerContent = (
            <header className={styles.responsiveHeader}>
                <h3 className={styles.textCenter}>{`${
                    data.id
                }. ${data.name[0].toUpperCase()}${data.name.slice(1)}`}</h3>
            </header>
        );

        return (
            <BaseCard header={headerContent} classes={['responsiveCard']}>
                <div
                    className={`${styles.responsiveImg} ${styles.flexColumn} ${styles.flexCenter} ${styles.flexRowCenter}`}
                >
                    <img
                        style={{ maxWidth: '28rem', width: '50%' }}
                        src={data.sprites.front_default}
                        alt={`${data.name} default sprite`}
                    ></img>
                </div>

                <div className={styles.responsiveData}>
                    <h4 className={`${styles.mt1}`}>Abilities:</h4>
                    {data.abilities.map((ability, idx) => (
                        <Ability
                            abilityName={ability.ability.name}
                            idx={idx + 1}
                            key={idx}
                        />
                    ))}

                    <h4 className={`${styles.mt2}`}>Stats:</h4>
                    {data.stats.map((stat, idx) => (
                        <Stat stat={stat} key={idx} />
                    ))}
                </div>
            </BaseCard>
        );
    }
};

export default Display;
