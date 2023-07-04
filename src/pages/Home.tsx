import { useState, useEffect, FC } from 'react';
import { Container, Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/store';
import FlavorsList from '../components/FlavorsList/FlavorsList';
import Loader from '../components/Loader/Loader';
import useApi from '../api/index';
import useFilter from '../hooks/filter.hook';
import useSearch from '../hooks/search.hook';

// import { v4 as uuidv4 } from 'uuid';

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const [allFlavors, setAllFlavors] = useState([]);
    const [flavorRatingLoading, setFlavorRatingLoading] = useState(false);
    const { getFlavors, loading, updateRating, error } = useApi();
    const filter = useAppSelector(({ filter }) => filter.filter);
    const search = useAppSelector(({ search }) => search.search);

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

    // find flavor
    const searchedFlavors = useSearch(search, allFlavors);
    // filter flavors
    const filteredFlavors = useFilter(filter, searchedFlavors);

    useEffect(() => {
        getFlavors().then(data => {
            setAllFlavors(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setAllFlavors]);
    return (
        <section>
            <Container
                component="main"
                maxWidth="xl"
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
                <Alert severity="error">
                    Сталася помилка. <br />
                    Будь ласка оновіть сторінку.
                </Alert>
            )}
            <Snackbar
                open={flavorRatingLoading && !error}
                autoHideDuration={6000}
            >
                <Alert severity="success">Рейтинг успішно змінено!</Alert>
            </Snackbar>
        </section>
    );
};

export default Home;
