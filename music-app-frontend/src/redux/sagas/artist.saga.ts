import { SagaIterator } from "redux-saga";
import { ArtistActions } from "../../utils/constants/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { IArtist } from "../../types";
import { getArtistsApiCall, searchArtistsApiCall } from "../api/artists.api";
import { 
  fetchArtistsFailed, 
  fetchArtistsRequested, 
  fetchArtistsSucceeded,
  searchArtistsRequested,
  searchArtistsSucceeded,
  searchArtistsFailed
 } from "../features/artists/artists.slice";

// worker saga: will be fired on GET_ALBUMS_REQUESTED actions
function* fetchArtistsWorker(): SagaIterator  {
    try {
      yield put(fetchArtistsRequested());
      const artists: IArtist[] = yield call(getArtistsApiCall)
      yield put(fetchArtistsSucceeded(artists))
    } catch (e: any) {
      yield put(fetchArtistsFailed(e.response ? e.response.data.message : e.message))
    }
  }

// worker saga: will be fired on SEARCH_ARTIST_REQUESTED actions
function* searchArtistWorker(action: any): SagaIterator  {
  try {
    yield put (searchArtistsRequested());
    const albums: IArtist[] = yield call(searchArtistsApiCall, action.payload)
    yield put(searchArtistsSucceeded(albums))
  } catch (e: any) {
    yield put(searchArtistsFailed(e.response ? e.response.data.message : e.message))
  }
}


export function* artistSagas() {
    // Handles actions related to artists
    yield takeLatest(ArtistActions.GET_ARTISTS_REQUESTED, fetchArtistsWorker);
    yield takeLatest(ArtistActions.SEARCH_ARTIST_REQUESTED, searchArtistWorker);
}