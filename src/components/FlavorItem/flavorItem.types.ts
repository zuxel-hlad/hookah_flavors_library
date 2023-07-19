import { IFlavor } from '../../redux/flavorsSlice/flavorsSlice.types';

export type TUpdateFlavorRating = (rating: number, id: string) => void;
export interface IFlavorItemProps {
    flavor: IFlavor;
    tabIndex: number;
    updateFlavorRating: TUpdateFlavorRating;
}
