import { SagaIterator } from "redux-saga";
import { AlbumActions } from "../../utils/constants/actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { 
    fetchAlbumsRequested,
    fetchAlbumsSucceeded,
    fetchAlbumsFailed
 } from "../features/albums/albums.slice";
import { IAlbum } from "../../types";
import { getAlbumsApiCall, searchAlbumsApiCall } from "../api/albums.api";

// worker saga: will be fired on GET_ALBUMS_REQUESTED actions
function* fetchAlbumsWorker(): SagaIterator  {
    try {
      yield put(fetchAlbumsRequested());
      const albums: IAlbum[] = yield call(getAlbumsApiCall)
      yield put(fetchAlbumsSucceeded(albums))
    } catch (e: any) {
      yield put(fetchAlbumsFailed(e.message))
    }
  }

// worker saga: will be fired on SEARCH_ALBUM_REQUESTED actions
function* searchAlbumWorker(action: any): SagaIterator  {
  try {
    yield put (fetchAlbumsRequested());
    const albums: IAlbum[] = yield call(searchAlbumsApiCall, action.payload)
    yield put(fetchAlbumsSucceeded(albums))
  } catch (e: any) {
    yield put(fetchAlbumsFailed(e.message))
  }
}

export function* albumSagas() {
    // Handles actions related to albums
    yield takeLatest(AlbumActions.GET_ALBUMS_REQUESTED, fetchAlbumsWorker);
    yield takeLatest(AlbumActions.SEARCH_ALBUM_REQUESTED, searchAlbumWorker);
}