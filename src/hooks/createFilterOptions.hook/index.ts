import { useMemo } from 'react';
import { IFilterOptions } from './createFilterOptionsTypes';
import { IFlavor } from '../../redux/flavorsSlice/flavorsSlice.types';

const useCreateFilterOptions = (flavors: IFlavor[]): IFilterOptions[] =>
    useMemo(
        () => [
            {
                label: 'Усі',
                value: 'all',
            },
            {
                label: 'За рейтингом',
                value: 'rating',
            },
            {
                label: 'Є холод',
                value: 'ice',
            },
            ...flavors
                .map(({ type }) => ({
                    label: type.charAt(0).toUpperCase() + type.slice(1),
                    value: type,
                }))
                .reduce((o, i) => {
                    if (!o.find(v => v.label === i.label)) {
                        o.push(i);
                    }
                    return o;
                }, []),
        ],
        [flavors]
    );
export default useCreateFilterOptions;
