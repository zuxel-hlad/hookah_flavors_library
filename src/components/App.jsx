import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import FlavorsList from './FlavorsList';
import Loader from './Loader';
import useApi from '../api/index';
import useFilter from '../hooks/filter.hook';
import useSearch from '../hooks/search.hook';
// import flavors from '../data/flavors';

const containerStyles = {
    paddingTop: '88px',
    paddingBottom: '24px',

    '@media screen and (max-width: 576px)': {
        paddingTop: '175px',
    },
};

const App = () => {
    // statements
    const [allFlavors, setAllFlavors] = useState([]);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const { getFlavors, loading, updateRating } = useApi();

    // update flavor rating
    const updateFlavorRating = async (rating, id) => {
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
                <FlavorsList
                    flavors={filteredFlavors}
                    updateFlavorRating={updateFlavorRating}
                />
            </Container>
            {loading && <Loader />}
        </div>
    );
};

export default App;
