import { useEffect, FC } from 'react';
import { Container, Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
    getFlavors,
    updateRating,
    addFlavor,
} from '../redux/flavorsSlice/flavorsSlice.async.actions';
import FlavorsList from '../components/FlavorsList/FlavorsList';
import Loader from '../components/Loader/Loader';
import useFilter from '../hooks/filter.hook/filter.hook';
import useSearch from '../hooks/search.hook/search.hook';

import { v4 as uuidv4 } from 'uuid';

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(({ filter }) => filter.filter);
    const search = useAppSelector(({ search }) => search.search);
    const flavors = useAppSelector(({ flavors }) => flavors.flavors || []);
    const flavorsLoadingStatus = useAppSelector(
        ({ flavors }) => flavors.flavorsLoadingStatus
    );
    const flavorRatingLoadingStatus = useAppSelector(
        ({ flavors }) => flavors.flavorRatingLoadingStatus
    );

    // update flavor rating
    const updateFlavorRating = (rating: number, id: string): void => {
        dispatch(updateRating({ rating, id }));
    };

    const addNewFlavor = (): void => {
        dispatch(
            addFlavor({
                id: uuidv4(),
                title: 'Daim - TWO APPLES',
                type: 'daim',
                rating: 3,
                compound: 'Аніс, Зелене яблуко, Яблуко',
                image: '',
                ice: false,
            })
        );

        console.log('flavor was added');
    };

    // find flavor
    const searchedFlavors = useSearch(search, flavors);
    // filter flavors
    const filteredFlavors = useFilter(filter, searchedFlavors);

    useEffect(() => {
        dispatch(getFlavors());
    }, []);

    return (
        <section>
            <Container
                component="main"
                maxWidth="xl"
            >
                {/* <button
                    style={{ padding: '15px', cursor: 'pointer' }}
                    type="button"
                    onClick={addNewFlavor}
                >
                    ADD FLAVOR
                </button> */}
                {flavorsLoadingStatus !== 'error' && (
                    <FlavorsList
                        flavors={filteredFlavors}
                        updateFlavorRating={updateFlavorRating}
                    />
                )}
            </Container>
            {flavorsLoadingStatus === 'loading' && <Loader />}
            {flavorsLoadingStatus === 'error' && (
                <Alert severity="error">
                    Сталася помилка. <br />
                    Будь ласка оновіть сторінку.
                </Alert>
            )}
            <Snackbar
                open={flavorRatingLoadingStatus === 'loading'}
                autoHideDuration={6000}
            >
                <Alert severity="success">Рейтинг успішно змінено!</Alert>
            </Snackbar>
        </section>
    );
};

export default Home;
