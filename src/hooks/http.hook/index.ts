import { Request } from './http.hook.types';

const useHttp = () => {
    const request: Request = async <T>(
        url,
        method = 'GET',
        body = null,
        headers = { 'Content-Type': 'application/json' }
    ) => {
        try {
            const response = await fetch(url, { method, body, headers });
            if (!response.ok) {
                throw new Error(
                    `Could not fetch ${url}, status ${response.status}`
                );
            }
            const data: T = await response.json();

            return data;
        } catch (e: unknown) {
            throw e;
        }
    };

    return { request };
};

export default useHttp;
