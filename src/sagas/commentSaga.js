import { call, fork, put, takeLeading } from "redux-saga/effects"
import commentsService from "../services/comments.service"
import { sleep } from "../utils/sleep"

async function commentsGet() {
    const request = await commentsService.get()
    sleep(500)
    return request
}

export function* workerSaga() {
    yield put({ type: "BEGIN_LOADING"})
    const result = yield call(commentsGet())
    yield put({ type: "SET_COMMENTS", payload: result })
    yield put({ type: "END_LOADING"})
}

export function* watchCommentSaga() {
    yield takeLeading("LOAD_COMMENTS", workerSaga)
}

export default function* commentSaga() {
    yield fork(watchCommentSaga)
}