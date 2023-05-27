import { call, fork, put, takeLeading } from "redux-saga/effects"
import commentsService from "../services/comments.service"
import { sleep } from "../utils/sleep"

async function commentsGet() {
    const request = await commentsService.get()
    sleep(500)
    return request
}

export function* workerSaga() {
    yield put({ type: "COMMENTS/BEGIN_LOADING" })
    const result = yield call(commentsGet)
    yield put({ type: "COMMENTS/SET", payload: result })
    yield put({ type: "COMMENTS/END_LOADING" })
}

export function* watchCommentSaga() {
    yield takeLeading("LOAD_COMMENTS", workerSaga)
}

export default function* commentSaga() {
    yield fork(watchCommentSaga)
}
