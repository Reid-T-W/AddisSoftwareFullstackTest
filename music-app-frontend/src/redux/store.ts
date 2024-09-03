import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './root.saga';
import songsReducer from './features/songs/songs.slice';
import artistsReducer from './features/artists/artists.slice';
import albumsReducer from './features/albums/albums.slice';
import genresReducer from './features/genres/genres.slice';
import statsReducer from './features/stats/stats.slice';
import settingsReducer from './features/settings/settings.slice'
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        songs: songsReducer,
        stats: statsReducer,
        settings: settingsReducer,
        artists: artistsReducer,
        albums: albumsReducer,
        genres: genresReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;