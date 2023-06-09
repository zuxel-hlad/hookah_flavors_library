import { useState, useEffect } from 'react';
import { Container, Alert, Snackbar } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';
import Header from '../Header/Header';
import FlavorsList from '../FlavorsList/FlavorsList';
import Loader from '../Loader/Loader';
import useApi from '../../api/index';
import useFilter from '../../hooks/filter.hook';
import useSearch from '../../hooks/search.hook';
import styles from './App.module.scss';

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

    // const addNewFlavor = async () => {
    //     await addFlavor({
    //         id: uuidv4(),
    //         title: 'Daim - ENDLESS FLIRT',
    //         type: 'daim',
    //         rating: 3,
    //         compound: 'Манго, Маракуйя, Мята, Черника',
    //         image: '',
    //         ice: false,
    //     });
    //     console.log('flavor was added');
    // };

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
    }, [setAllFlavors]);

    return (
        <div className={styles.app}>
            <Header
                filter={filter}
                search={search}
                updateSearch={setSearch}
                updateFilter={setFilter}
                resetFilters={resetFilters}
            />
            <Container
                component="main"
                maxWidth="xl"
                className={styles.main}
            >
                {/* <button
                    type="button"
                    onClick={addNewFlavor}
                >
                    ADD FLAVOR
                </button> */}
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
                    className={styles.errorAlert}
                >
                    Сталася помилка. <br />
                    Будь ласка оновіть сторінку.
                </Alert>
            )}
            <Snackbar open={flavorRatingLoading && !error}>
                <Alert severity="success">Рейтинг успішно змінено!</Alert>
            </Snackbar>
        </div>
    );
};

export default App;
