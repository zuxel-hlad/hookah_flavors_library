import { useMemo } from 'react';
import { IFlavor } from '../../redux/flavorsSlice/flavorsSlice.types';

const useFilter = (filter: string, filterArray: IFlavor[]) =>
    useMemo(() => {
        switch (filter) {
            case 'ice':
                return filterArray.filter(item => item.ice);
            case 'daim':
                return filterArray.filter(item => item.type === 'daim');
            case 'jibiar':
                return filterArray.filter(item => item.type === 'jibiar');
            case 'serbetly':
                return filterArray.filter(item => item.type === 'serbetly');
            case 'molfar':
                return filterArray.filter(item => item.type === 'molfar');
            case 'adalya':
                return filterArray.filter(item => item.type === 'adalya');
            case 'lira':
                return filterArray.filter(item => item.type === 'lira');
            case 'zodiac':
                return filterArray.filter(item => item.type === 'zodiac');
            case 'diamond':
                return filterArray.filter(item => item.type === 'diamond');
            case '420':
                return filterArray.filter(item => item.type === '420');
            case 'rating':
                return [...filterArray].sort((a, b) => b.rating - a.rating);
            default:
                return filterArray;
        }
    }, [filter, filterArray]);
export default useFilter;
