import { all } from 'redux-saga/effects'
import { 
    songSagas,
    statsSagas,
    albumSagas,
    artistSagas,
    genreSagas
 } from './sagas'

export default function *rootSaga() {
    yield all([
        songSagas(),
        statsSagas(),
        artistSagas(),
        albumSagas(),
        genreSagas()
    ])
}