import useHttp from '../hooks/http.hook';

const useApi = () => {
    const { request, clearError, loading, error, setLoading } = useHttp();
    const apiBase = 'https://shop-app-6c9a6-default-rtdb.firebaseio.com/';

    const getFlavors = async () => {
        const flavors = await request(`${apiBase}flavors.json`);
        return Object.keys(flavors).map(flavor => ({
            ...flavors[flavor],
            id: flavor,
        }));
    };

    const addFlavor = async flavor => {
        await request(`${apiBase}flavors.json`, 'POST', JSON.stringify(flavor));
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
        addFlavor,
        setLoading,
    };
};

export default useApi;
