import { useState, useMemo, useEffect } from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import FlavorsList from './FlavorsList';
import Loader from './Loader';
import flavors from '../data/flavors';

const containerStyles = {
    paddingTop: '88px',
    paddingBottom: '24px',

    '@media screen and (max-width: 576px)': {
        paddingTop: '175px',
    },
};

const App = () => {
    // statements
    const [loading, setLoading] = useState(false);
    const [allFlavors, setAllFlavors] = useState(flavors);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const getFlavors = async () => {
        try {
            setLoading(true);
            const data = await fetch(
                'https://shop-app-6c9a6-default-rtdb.firebaseio.com/flavors.json'
            );
            const res = await data.json();
            setAllFlavors(res[Object.keys(res)[0]]);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }

        // console.log();
    };

    // const addFlavor = async () => {
    //     const data = await fetch(
    //         `https://shop-app-6c9a6-default-rtdb.firebaseio.com/flavors.json`,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(flavors),
    //         }
    //     );
    //     console.log(data);
    // };
    useEffect(() => {
        // addFlavor();
        // getFlavors();
    }, []);

    // update flavor rating
    const updateFlavorRating = async (rating, id) => {
        const idx = allFlavors.findIndex(item => item.id === id);
        setLoading(true);
        try {
            const data = await fetch(
                `https://shop-app-6c9a6-default-rtdb.firebaseio.com/flavors/-NVQi6TOEc4HaCKJygra/${idx}.json`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ rating }),
                }
            );
            console.log(data);
            getFlavors();
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
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
    const searchedFlavors = useMemo(() => {
        if (search.length) {
            return [...allFlavors].filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        return allFlavors;
    }, [search, allFlavors]);

    // filter flavors
    const filteredFlavors = useMemo(() => {
        switch (filter) {
            case 'ice':
                return searchedFlavors.filter(item => item.ice);
            case 'daim':
                return searchedFlavors.filter(item => item.type === 'daim');
            case 'jibiar':
                return searchedFlavors.filter(item => item.type === 'jibiar');
            case 'serbetly':
                return searchedFlavors.filter(item => item.type === 'serbetly');
            case 'molfar':
                return searchedFlavors.filter(item => item.type === 'molfar');
            case 'adalya':
                return searchedFlavors.filter(item => item.type === 'adalya');
            case 'lira':
                return searchedFlavors.filter(item => item.type === 'lira');
            case '420':
                return searchedFlavors.filter(item => item.type === '420');
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
