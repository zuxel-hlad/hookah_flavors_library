import { RootState } from '../store';

export const flavorsSelector = ({ flavors }: RootState) =>
    flavors.flavors || [];

export const flavorsLoadingStatusSelector = ({ flavors }: RootState) =>
    flavors.flavorsLoadingStatus;

export const flavorsLoadingErrorMessageSelector = ({ flavors }: RootState) =>
    flavors.flavorsLoadingErrorMessage;

export const ratingStatusSnackVisibilitySelector = ({ flavors }: RootState) =>
    flavors.ratingStatusSnackVisibility;

export const updateRatingStatusSelector = ({ flavors }: RootState) =>
    flavors.updateRatingStatus;

export const updateRatingMessageSelector = ({ flavors }: RootState) =>
    flavors.updateRatingMessage;
