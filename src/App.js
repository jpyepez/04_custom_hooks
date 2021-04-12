import './App.css';
import MainHeader from './components/layout/MainHeader';
import MainContainer from './components/layout/MainContainer';
import Cockpit from './components/main/Cockpit';
import styles from './styles/Layout.module.css';

function App() {
    return (
        <div className="App">
            <MainHeader>
                <h1 className={`${styles.m0} ${styles.m1}`}>
                    Pokémon React App
                </h1>
            </MainHeader>
            <MainContainer>
                <Cockpit />
            </MainContainer>
        </div>
    );
}

export default App;
