import Header from '../Header/Header';
import styles from './App.module.scss';

const App = ({ children }) => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default App;
