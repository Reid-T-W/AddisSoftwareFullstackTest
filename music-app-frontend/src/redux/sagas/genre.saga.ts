import { SagaIterator } from "redux-saga";
import { GenreActions } from "../../utils/constants/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { IGenre } from "../../types";
import { 
  fetchGenresFailed,
  fetchGenresRequested, 
  fetchGenresSucceeded,
  searchGenresRequested,
  searchGenresSucceeded,
  searchGenresFailed,
 } from "../features/genres/genres.slice";
import { getGenresApiCall, searchGenresApiCall } from "../api/genres.api";


// worker saga: will be fired on GET_ALBUMS_REQUESTED actions
function* fetchGenresWorker(): SagaIterator  {
    try {
      yield put(fetchGenresRequested());
      const genres: IGenre[] = yield call(getGenresApiCall)
      yield put(fetchGenresSucceeded(genres))
    } catch (e: any) {
      yield put(fetchGenresFailed(e.response ? e.response.data.message : e.message))
    }
  }

// worker saga: will be fired on SEARCH_GENRE_REQUESTED actions
function* searchGenreWorker(action: any): SagaIterator  {
  try {
    yield put (searchGenresRequested());
    const albums: IGenre[] = yield call(searchGenresApiCall, action.payload)
    yield put(searchGenresSucceeded(albums))
  } catch (e: any) {
    yield put(searchGenresFailed(e.response ? e.response.data.message : e.message))
  }
}

export function* genreSagas() {
    // Handles actions related to genres
    yield takeLatest(GenreActions.GET_GENRES_REQUESTED, fetchGenresWorker);
    yield takeLatest(GenreActions.SEARCH_GENRE_REQUESTED, searchGenreWorker);
}