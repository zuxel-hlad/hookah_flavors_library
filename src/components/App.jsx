import { useState, useEffect } from 'react';
import { Container, Alert, Snackbar } from '@mui/material';
import Header from './Header';
import FlavorsList from './FlavorsList';
import Loader from './Loader';
import useApi from '../api/index';
import useFilter from '../hooks/filter.hook';
import useSearch from '../hooks/search.hook';

const containerStyles = {
    paddingTop: '88px',
    paddingBottom: '24px',

    '@media screen and (max-width: 576px)': {
        paddingTop: '175px',
    },
};

const alertStyles = {
    textAlign: 'center',
    maxWidth: '280px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
};

const App = () => {
    // statements
    const [allFlavors, setAllFlavors] = useState([]);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [flavorRatingLoading, setFlavorRatingLoading] = useState(false);
    const { getFlavors, loading, updateRating, error } = useApi();

    // update flavor rating
    const updateFlavorRating = async (rating, id) => {
        setFlavorRatingLoading(true);
        setAllFlavors(
            allFlavors.map(f => {
                if (f.id === id) {
                    return {
                        ...f,
                        rating,
                    };
                }
                return f;
            })
        );
        await updateRating(id, rating);
        setFlavorRatingLoading(false);
    };

    // reset all filters
    const resetFilters = () => {
        if (filter !== 'all' || search.length > 0) {
            setFilter('all');
            setSearch('');
        }
        return undefined;
    };

    // find flavor
    const searchedFlavors = useSearch(search, allFlavors);

    // filter flavors
    const filteredFlavors = useFilter(filter, searchedFlavors);

    useEffect(() => {
        getFlavors().then(data => setAllFlavors(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="app">
            <Header
                filter={filter}
                search={search}
                updateSearch={setSearch}
                updateFilter={setFilter}
                resetFilters={resetFilters}
            />
            <Container
                sx={containerStyles}
                component="main"
                maxWidth="xl"
            >
                {!error && (
                    <FlavorsList
                        flavors={filteredFlavors}
                        updateFlavorRating={updateFlavorRating}
                    />
                )}
            </Container>
            {loading && !flavorRatingLoading && <Loader />}
            {error && (
                <Alert
                    severity="error"
                    sx={alertStyles}
                >
                    Сталася помилка. <br />
                    Будь ласка оновіть сторінку.
                </Alert>
            )}
            <Snackbar open={flavorRatingLoading && !error}>
                <Alert
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    Рейтинг успішно змінено!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default App;
