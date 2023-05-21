import { useMemo } from 'react';

const useSearch = (search, searchArray) =>
    useMemo(() => {
        if (search.length) {
            return [...searchArray].filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        return searchArray;
    }, [search, searchArray]);

export default useSearch;
