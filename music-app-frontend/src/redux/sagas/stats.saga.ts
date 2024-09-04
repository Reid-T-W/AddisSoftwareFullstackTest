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
export function* fetchStatsWorker(): SagaIterator  {
    try {
      yield put (fetchStatsRequested());
      const stats: IStats = yield call(getStatsApiCall)
      yield put(fetchStatsSucceeded(stats))
    } catch (e: any) {
      yield put(fetchStatsFailed(e.response ? e.response.data.message : e.message))
    }
  }


export function* statsSagas() {
    // Handles actions related to stats
    yield takeLatest(StatsActions.GET_STATS_REQUESTED, fetchStatsWorker);
}
