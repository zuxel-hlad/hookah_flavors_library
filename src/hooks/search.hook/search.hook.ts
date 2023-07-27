import { useMemo } from 'react';
import { IFlavor } from '../../redux/flavorsSlice/flavorsSlice.types';

const useSearch = (search: string, searchArray: IFlavor[]) =>
    useMemo(() => {
        if (search.length) {
            return [...searchArray].filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        return searchArray;
    }, [search, searchArray]);

export default useSearch;
