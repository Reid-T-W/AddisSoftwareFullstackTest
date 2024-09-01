import { IStats } from '../../types';
import { StatsActions } from '../../utils/constants/actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects'
import { getStatsApiCall } from '../api/stats.api';
import {
    fetchStatsRequested,
    fetchStatsSucceeded,
    fetchStatsFailed
}from '../features/stats/stats.slice'

// worker saga: will be fired on GET_STATS_REQUESTED actions
function* fetchStatsWorker(): SagaIterator  {
    try {
      yield put (fetchStatsRequested());
      const stats: IStats = yield call(getStatsApiCall)
      yield put(fetchStatsSucceeded(stats))
    } catch (e: any) {
      yield put(fetchStatsFailed(e.message))
    }
  }


export function* statsSagas() {
    // Handles actions related to songs
    yield takeLatest(StatsActions.GET_STATS_REQUESTED, fetchStatsWorker)
    // yield takeLatest(SongActions.EDIT_SONG_REQUESTED, editSongWorker)
    // yield takeLatest(SongActions.DELETE_SONG_REQUESTED, deleteSongWorker)
    // yield takeLatest(SongActions.ADD_SONG_REQUESTED, addSongWorker)
    // yield takeLatest(SongActions.SERCH_SONG_REQUESTED, searchSongWorker)
}
