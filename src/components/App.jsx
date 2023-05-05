import { useState, useMemo, useCallback } from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import FlavorsList from './FlavorsList';
import flavors from '../data/flavors';

const containerStyles = {
    paddingTop: '88px',
    paddingBottom: '24px',

    '@media screen and (max-width: 576px)': {
        paddingTop: '175px',
    },
};

const App = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const resetFilters = useCallback(() => {
        if (!filter || !search) return;
        setFilter('all');
        setSearch('');
    }, [filter, search]);

    const searchedFlavors = useMemo(() => {
        if (search.length) {
            return [...flavors].filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        return flavors;
    }, [search]);

    const filteredFlavors = useMemo(() => {
        switch (filter) {
            case 'ice':
                return searchedFlavors.filter((item) => item.ice);
            case 'daim':
                return searchedFlavors.filter((item) => item.type === 'daim');
            case 'jibiar':
                return searchedFlavors.filter((item) => item.type === 'jibiar');
            case 'serbetly':
                return searchedFlavors.filter(
                    (item) => item.type === 'serbetly'
                );
            case 'molfar':
                return searchedFlavors.filter((item) => item.type === 'molfar');
            case 'adalya':
                return searchedFlavors.filter((item) => item.type === 'adalya');
            case 'lira':
                return searchedFlavors.filter((item) => item.type === 'lira');
            case '420':
                return searchedFlavors.filter((item) => item.type === '420');
            case 'rating':
                return [...searchedFlavors].sort((a, b) => b.rating - a.rating);
            default:
                return searchedFlavors;
        }
    }, [filter, searchedFlavors]);

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
                <FlavorsList flavors={filteredFlavors} />
            </Container>
        </div>
    );
};

export default App;
