import { useEffect, FC } from 'react';
import { Container } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
    getFlavors,
    updateRating,
    // addFlavor,
} from '../redux/flavorsSlice/flavorsSlice.async.actions';
import {
    flavorsSelector,
    flavorsLoadingStatusSelector,
    ratingStatusSnackVisibilitySelector,
    flavorsLoadingErrorMessageSelector,
    updateRatingStatusSelector,
    updateRatingMessageSelector,
} from '../redux/flavorsSlice/selectors';
import { handleCloseRatingSnack } from '../redux/flavorsSlice';
import filterSelector from '../redux/filterSlice/selectors';
import searchSelector from '../redux/searchSlice/selectors';
import FlavorsList from '../components/FlavorsList/FlavorsList';
import Loader from '../components/Loader/Loader';
import useFilter from '../hooks/filter.hook/filter.hook';
import useSearch from '../hooks/search.hook/search.hook';
import AppSnackBar from '../components/AppSnackBar/AppSnackBar';
import AppAlert from '../components/AppAlert/AppAlert';

const Home: FC = () => {
    const dispatch = useAppDispatch();
    // selectors
    const filter = useAppSelector(filterSelector);
    const search = useAppSelector(searchSelector);
    const flavors = useAppSelector(flavorsSelector);
    const flavorsLoadingStatus = useAppSelector(flavorsLoadingStatusSelector);
    const updateRatingStatus = useAppSelector(updateRatingStatusSelector);
    const updateRatingMessage = useAppSelector(updateRatingMessageSelector);
    const ratingStatusSnackVisibility = useAppSelector(
        ratingStatusSnackVisibilitySelector
    );
    const flavorsLoadingErrorMessage = useAppSelector(
        flavorsLoadingErrorMessageSelector
    );

    // update flavor rating
    const updateFlavorRating = (rating: number, id: string): void => {
        dispatch(updateRating({ rating, id }));
    };

    // close update rating snack
    const closeUpdateRatingSnack = () => {
        dispatch(handleCloseRatingSnack());
    };

    // const addNewFlavor = (): void => {
    //     dispatch(
    //         addFlavor({
    //             id: uuidv4(),
    //             title: 'Daim - TWO APPLES',
    //             type: 'daim',
    //             rating: 3,
    //             compound: 'Аніс, Зелене яблуко, Яблуко',
    //             image: '',
    //             ice: false,
    //         })
    //     );

    //     console.log('flavor was added');
    // };

    // find flavor
    const searchedFlavors = useSearch(search, flavors);
    // filter flavors
    const filteredFlavors = useFilter(filter, searchedFlavors);

    // get all flavors
    useEffect(() => {
        dispatch(getFlavors());
    }, [dispatch]);

    return (
        <>
            <Container
                component={null}
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
                <AppAlert
                    severity="error"
                    message={flavorsLoadingErrorMessage}
                />
            )}

            <AppSnackBar
                onClose={closeUpdateRatingSnack}
                open={ratingStatusSnackVisibility}
            >
                <AppAlert
                    severity={updateRatingStatus}
                    message={updateRatingMessage}
                    onClose={closeUpdateRatingSnack}
                />
            </AppSnackBar>
        </>
    );
};

export default Home;
