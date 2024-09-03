import { SagaIterator } from "redux-saga";
import { ArtistActions } from "../../utils/constants/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { IArtist } from "../../types";
import { getArtistsApiCall, searchArtistsApiCall } from "../api/artists.api";
import { fetchArtistsFailed, fetchArtistsRequested, fetchArtistsSucceeded } from "../features/artists/artists.slice";

// worker saga: will be fired on GET_ALBUMS_REQUESTED actions
function* fetchArtistsWorker(): SagaIterator  {
    try {
      yield put(fetchArtistsRequested());
      const artists: IArtist[] = yield call(getArtistsApiCall)
      yield put(fetchArtistsSucceeded(artists))
    } catch (e: any) {
      yield put(fetchArtistsFailed(e.message))
    }
  }

// worker saga: will be fired on SEARCH_ARTIST_REQUESTED actions
function* searchArtistWorker(action: any): SagaIterator  {
  try {
    yield put (fetchArtistsRequested());
    const albums: IArtist[] = yield call(searchArtistsApiCall, action.payload)
    yield put(fetchArtistsSucceeded(albums))
  } catch (e: any) {
    yield put(fetchArtistsFailed(e.message))
  }
}


export function* artistSagas() {
    // Handles actions related to artists
    yield takeLatest(ArtistActions.GET_ARTISTS_REQUESTED, fetchArtistsWorker);
    yield takeLatest(ArtistActions.SEARCH_ARTIST_REQUESTED, searchArtistWorker);
}