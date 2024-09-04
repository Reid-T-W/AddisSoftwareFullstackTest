import { ISong } from '../../types';
import { SongActions } from '../../utils/constants/actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects'
import { 
  addSongApiCall,
  getSongDetailsApiCall,
  getSongsApiCall,
  updateSongApiCall,
  deleteSongApiCall,
  searchSongsApiCall
} from '../api/songs.api';
import {
    fetchSongsRequested,
    fetchSongsSucceeded,
    fetchSongsFailed,
    addSongRequested,
    addSongSucceeded,
    addSongFailed,
    fetchSongDetailsRequested,
    fetchSongDetailsSucceeded,
    fetchSongDetailsFailed,
    updateSongRequested,
    updateSongSucceeded,
    updateSongFailed,
    deleteSongRequested,
    deleteSongSucceeded,
    deleteSongFailed,
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
    yield call(addSongApiCall, action.payload)
    yield put(addSongSucceeded())
    
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

// worker saga: will be fired on GET_SONG_DETAILS_REQUESTED actions
function* fetchSongDetailsWorker(action: any): SagaIterator {
  try {
    yield put (fetchSongDetailsRequested());
    const song: ISong = yield call(getSongDetailsApiCall, action.payload)
    yield put(fetchSongDetailsSucceeded(song))
  } catch (e: any) {
    yield put(fetchSongDetailsFailed(e.message))
  }
}

// worker saga: will be fired on UPDATE_SONG_REQUESTED actions
function* updateSongWorker(action: any): SagaIterator {
  try {
    console.log("in update sonw worker")
    yield put(updateSongRequested());
    yield call(updateSongApiCall, action.payload)
    yield put(updateSongSucceeded())
    
    // Once the song is successfully updated make a call to the songs api,
    // so that songs so that songs are updated
    // Call to fetch songs
    yield call(fetchSongsWorker);
  } catch (e: any) {
    yield put(updateSongFailed(e.message))
  }
}

// worker saga: will be fired on DELETE_SONG_REQUESTED actions
function* deleteSongWorker(action: any): SagaIterator {
  try {
    yield put(deleteSongRequested(action.payload));
    yield call(deleteSongApiCall, action.payload)
    yield put(deleteSongSucceeded())
    
    // Once the song is successfully deleted make a call to the songs and 
    // stats api, so that songs and stats are updated instantly
    // Call to fetch songs
    yield call(fetchSongsWorker);
    // Call to fetch stats
    yield call(fetchStatsWorker);
  } catch (e: any) {
    yield put(deleteSongFailed(e.message))
  }
}

// worker saga: will be fired on SEARCH_SONG_REQUESTED actions
function* searchSongWorker(action: any): SagaIterator  {
  try {
    yield put (fetchSongsRequested());
    const songs: ISong[] = yield call(searchSongsApiCall, action.payload)
    yield put(fetchSongsSucceeded(songs))
  } catch (e: any) {
    yield put(fetchSongsFailed(e.message))
  }
}


export function* songSagas() {
    // Handles actions related to songs
    yield takeLatest(SongActions.GET_SONGS_REQUESTED, fetchSongsWorker)
    yield takeLatest(SongActions.UPDATE_SONG_REQUESTED, updateSongWorker)
    yield takeLatest(SongActions.DELETE_SONG_REQUESTED, deleteSongWorker)
    yield takeLatest(SongActions.ADD_SONG_REQUESTED, addSongWorker)
    yield takeLatest(SongActions.SEARCH_SONG_REQUESTED, searchSongWorker)
    yield takeLatest(SongActions.GET_SONG_DETAILS_REQUESTED, fetchSongDetailsWorker)
}
