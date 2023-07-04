import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './App.module.scss';
import router from '../../Router';

const App = () => {
    // statements

    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const resetFilters = () => {
        if (filter !== 'all' || search.length > 0) {
            setFilter('all');
            setSearch('');
        }
        return undefined;
    };

    return (
        <div className={styles.app}>
            <Header
                filter={filter}
                search={search}
                updateSearch={setSearch}
                updateFilter={setFilter}
                resetFilters={resetFilters}
            />
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
