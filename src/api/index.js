import useHttp from '../hooks/http.hook';

const useApi = () => {
    const { request, clearError, loading, error } = useHttp();
    const apiBase = 'https://shop-app-6c9a6-default-rtdb.firebaseio.com/';

    const getFlavors = async () => {
        const flavors = await request(`${apiBase}flavors.json`);
        return Object.keys(flavors).map(flavor => ({
            ...flavors[flavor],
            id: flavor,
        }));
    };
    const updateRating = async (id, rating) => {
        await request(
            `${apiBase}flavors/${id}.json`,
            'PATCH',
            JSON.stringify({ rating })
        );
    };

    return {
        clearError,
        loading,
        getFlavors,
        error,
        updateRating,
    };
};

export default useApi;
