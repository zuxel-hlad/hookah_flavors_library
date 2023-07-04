export interface IFlavorsState {
    flavors: IFlavor[];
    loadingStatus: 'idle' | 'error' | 'loading';
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
