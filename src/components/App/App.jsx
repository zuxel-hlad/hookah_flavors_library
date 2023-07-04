import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './App.module.scss';
import router from '../../router';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <Routes>
                    {router.map(({ path, element }) => (
                        <Route
                            path={path}
                            key={path}
                            Component={element}
                        />
                    ))}
                    <Route
                        path="*"
                        element={
                            <Navigate
                                replace
                                to="/404"
                            />
                        }
                    />
                </Routes>
            </main>
        </div>
    );
};

export default App;
