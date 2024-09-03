import { SagaIterator } from "redux-saga";
import { GenreActions } from "../../utils/constants/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { IGenre } from "../../types";
import { fetchGenresFailed, fetchGenresRequested, fetchGenresSucceeded } from "../features/genres/genres.slice";
import { getGenresApiCall } from "../api/genres.api";


// worker saga: will be fired on GET_ALBUMS_REQUESTED actions
function* fetchGenresWorker(): SagaIterator  {
    try {
      yield put(fetchGenresRequested());
      const genres: IGenre[] = yield call(getGenresApiCall)
      yield put(fetchGenresSucceeded(genres))
    } catch (e: any) {
      yield put(fetchGenresFailed(e.message))
    }
  }

export function* genreSagas() {
    // Handles actions related to genres
    yield takeLatest(GenreActions.GET_GENRES_REQUESTED, fetchGenresWorker);
}