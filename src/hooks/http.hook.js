import { useState } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = async (
        url,
        method = 'GET',
        body = null,
        headers = { 'Content-Type': 'applecation/json' }
    ) => {
        setLoading(true);

        try {
            const response = await fetch(url, { method, body, headers });
            if (!response.ok) {
                throw new Error(
                    `Could not fetch ${url}, status ${response.status}`
                );
            }
            const data = await response.json();

            return data;
        } catch (e) {
            setError(true);
            throw e;
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => {
        setError(false);
    };

    return { request, clearError, loading, error };
};

export default useHttp;
