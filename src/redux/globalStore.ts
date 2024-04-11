import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice from './slices/authSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const userPersistConfig = {
    key: 'user',
    storage,
};

const userPersistedReducer = persistReducer(userPersistConfig, userSlice);

export const globalStore = configureStore({
    reducer: {
        userStatus: userPersistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(globalStore);

export type RootState = ReturnType<typeof globalStore.getState>

export type AppDispatch = typeof globalStore.dispatch