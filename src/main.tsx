import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './router';
import store from './redux/store';
import './assets/scss/style.scss';
import App from './components/App/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App>
                <RouterProvider router={router} />
            </App>
        </Provider>
    </React.StrictMode>
);
