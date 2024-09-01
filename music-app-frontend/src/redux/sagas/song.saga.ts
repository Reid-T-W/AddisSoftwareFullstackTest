import { ISong } from '../../types';
import { SongActions } from '../../utils/constants/actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects'
import { getSongsApiCall } from '../api/songs.api';
import {
    fetchSongsRequested,
    fetchSongsSucceeded,
    fetchSongsFailed
}from '../features/songs/songs.slice'

// worker saga: will be fired on GET_SONGS_REQUESTED actions
function* fetchSongsWorker(): SagaIterator  {
    try {
      yield put (fetchSongsRequested());
      const songs: ISong[] = yield call(getSongsApiCall)
      yield put(fetchSongsSucceeded(songs))
    } catch (e: any) {
      yield put(fetchSongsFailed(e.message))
    }
  }


export function* songSagas() {
    // Handles actions related to songs
    yield takeLatest(SongActions.GET_SONGS_REQUESTED, fetchSongsWorker)
    // yield takeLatest(SongActions.EDIT_SONG_REQUESTED, editSongWorker)
    // yield takeLatest(SongActions.DELETE_SONG_REQUESTED, deleteSongWorker)
    // yield takeLatest(SongActions.ADD_SONG_REQUESTED, addSongWorker)
    // yield takeLatest(SongActions.SERCH_SONG_REQUESTED, searchSongWorker)
}
