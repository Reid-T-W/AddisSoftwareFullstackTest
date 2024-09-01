import { all } from 'redux-saga/effects'
import { songSagas, statsSagas } from './sagas'
// import { songSagas, artistsSaga, albumsSaga, genreSaga } from './sagas'

export default function *rootSaga() {
    yield all([
        songSagas(),
        statsSagas(),
        // artistsSaga(),
        // albumsSaga(),
        // genreSaga()
    ])
}