import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { globalStore, persistor } from './redux/globalStore';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="868373291629-e5piuqgom32dbo66062hrnu2iibgcvqp.apps.googleusercontent.com">
            <Provider store={globalStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <HashRouter basename="google-auth-web">
                        <App />
                    </HashRouter>
                </PersistGate>
            </Provider>

        </GoogleOAuthProvider>;

    </React.StrictMode>
);