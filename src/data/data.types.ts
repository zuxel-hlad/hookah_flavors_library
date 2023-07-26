export interface IFlavorsFilter {
    label: string;
    value: string;
    id: number;
}

export interface IFMockFlavor {
    id: string;
    title: string;
    type: string;
    rating: number;
    compound: string;
    image: string | object;
    ice: boolean;
    comments: string[];
}
