import { call, fork, put, takeEvery } from "redux-saga/effects"
import postsService from "../services/posts.service"

async function postsGet() {
    const request = await postsService.get()
    return request
}

export function* workerSaga() {
    const result = yield call(postsGet)
    yield put({ type: "SET_POSTS", payload: result })
}

export function* watchPostSaga() {
    yield takeEvery("LOAD_DATA", workerSaga)
}

export default function* postSaga() {
    console.log("Saga ready")
    yield fork(watchPostSaga)
}
