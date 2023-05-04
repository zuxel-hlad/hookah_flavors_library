import { useState, useEffect, useMemo } from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import FlavorsList from './FlavorsList';
import flavors from '../data/flavors';
import Loader from './Loader';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {loading ? <Loader /> : null}
            <div className="app">
                <Header
                    filter={filter}
                    search={search}
                    updateSearch={setSearch}
                    updateFilter={setFilter}
                />
                <Container
                    sx={{ paddingTop: '100px', paddingBottom: '20px' }}
                    component="main"
                    maxWidth="xl"
                >
                    <FlavorsList flavors={flavors} />
                </Container>
            </div>
        </>
    );
};

export default App;
