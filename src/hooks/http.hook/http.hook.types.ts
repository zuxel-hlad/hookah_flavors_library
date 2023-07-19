export type RequestFunction = <T>(
    url: string,
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
    body?: any,
    headers?: { 'Content-Type': 'application/json' } | { [key: string]: string }
) => Promise<T>;
