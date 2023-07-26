import { IFlavor } from '../../redux/flavorsSlice/flavorsSlice.types';
import { TUpdateFlavorRating } from '../FlavorItem/flavorItem.types';

export interface IFlavorListProps {
    flavors: IFlavor[];
    updateFlavorRating: TUpdateFlavorRating;
}
