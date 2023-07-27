import { useMemo } from 'react';
import { IFlavor } from '../../redux/flavorsSlice/flavorsSlice.types';

const useFilter = (filter: string, filterArray: IFlavor[]): IFlavor[] =>
    useMemo(() => {
        switch (filter) {
            case 'all':
                return filterArray;
            case 'ice':
                return filterArray.filter(item => item.ice);
            case 'rating':
                return [...filterArray].sort((a, b) => b.rating - a.rating);
            default:
                return filterArray.filter(item => item.type === filter);
        }
    }, [filter, filterArray]);
export default useFilter;
