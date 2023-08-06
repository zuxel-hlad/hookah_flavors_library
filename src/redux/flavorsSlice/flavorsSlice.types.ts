export interface IFlavorsState {
    flavors: IFlavor[];
    flavorsLoadingStatus: 'idle' | 'error' | 'loading';
    updateRatingStatus: 'error' | 'success';
    flavorsLoadingErrorMessage: string;
    updateRatingMessage: string;
    ratingStatusSnackVisibility: boolean;
}

export interface IFlavor {
    compound: string;
    ice: boolean;
    id: string;
    image: string;
    rating: number;
    title: string;
    type: string;
}

export interface IUpdateRatingOptions {
    id: string;
    rating: number;
}

export interface IAddNewFlavor {
    name: string;
}
