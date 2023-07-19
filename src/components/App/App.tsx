import { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import styles from './App.module.scss';

const App: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default App;
