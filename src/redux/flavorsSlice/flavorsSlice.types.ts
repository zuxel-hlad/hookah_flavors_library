export interface IFlavorsState {
    flavors: IFlavor[];
    flavorsLoadingStatus: 'idle' | 'error' | 'loading';
    flavorRatingLoadingStatus: 'idle' | 'error' | 'loading';
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
    name: string
}
