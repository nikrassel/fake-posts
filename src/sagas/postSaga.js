import { call, fork, put, takeLeading } from "redux-saga/effects"
import postsService from "../services/posts.service"
import { sleep } from "../utils/sleep"

async function postsGet() {
    const request = await postsService.get()
    sleep(500)
    return request
}

export function* workerSaga() {
    yield put({ type: "POSTS/START_LOADING" })
    const result = yield call(postsGet)
    yield put({ type: "POSTS/SET", payload: result })
    yield put({ type: "POSTS/END_LOADING" })
}

export function* watchPostSaga() {
    yield takeLeading("LOAD_POSTS", workerSaga)
}

export default function* postSaga() {
    yield fork(watchPostSaga)
}
