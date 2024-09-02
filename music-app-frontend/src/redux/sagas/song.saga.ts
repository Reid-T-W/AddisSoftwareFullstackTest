import { ISong } from '../../types';
import { SongActions } from '../../utils/constants/actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects'
import { addSongApiCall, getSongsApiCall } from '../api/songs.api';
import {
    fetchSongsRequested,
    fetchSongsSucceeded,
    fetchSongsFailed,
    addSongRequested,
    addSongSucceeded,
    addSongFailed
}from '../features/songs/songs.slice'
import { fetchStatsWorker } from './stats.saga'

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

// worker saga: will be fired on ADD_SONG_REQUESTED actions
function* addSongWorker(action: any): SagaIterator {
  try {
    yield put(addSongRequested());
    const response: ISong = yield call(addSongApiCall, action.payload)
    yield put(addSongSucceeded(response))
    
    // Once the song is successfully added make a call to the songs and 
    // stats api, so that songs and stats are updated instantly
    // Call to fetch songs
    yield call(fetchSongsWorker);
    // Call to fetch stats
    yield call(fetchStatsWorker);
  } catch (e: any) {
    yield put(addSongFailed(e.message))
  }
}


export function* songSagas() {
    // Handles actions related to songs
    yield takeLatest(SongActions.GET_SONGS_REQUESTED, fetchSongsWorker)
    // yield takeLatest(SongActions.EDIT_SONG_REQUESTED, editSongWorker)
    // yield takeLatest(SongActions.DELETE_SONG_REQUESTED, deleteSongWorker)
    yield takeLatest(SongActions.ADD_SONG_REQUESTED, addSongWorker)
    // yield takeLatest(SongActions.SERCH_SONG_REQUESTED, searchSongWorker)
}
