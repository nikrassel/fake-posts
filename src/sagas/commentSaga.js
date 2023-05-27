import { call, fork, put, takeLeading } from "redux-saga/effects"
import commentsService from "../services/comments.service"
import { sleep } from "../utils/sleep"

async function commentsGet() {
    const request = await commentsService.get()
    sleep(500)
    return request
}

export function* workerSaga() {
    try {
        yield put({ type: "COMMENTS/BEGIN_LOADING" })
        const result = yield call(commentsGet)
        yield put({ type: "COMMENTS/SET", payload: result })
        yield put({ type: "COMMENTS/END_LOADING" })
    } catch (error) {
        yield put({ type: "ERROR/SHOW_ALERT", 
            payload:"Что-то пошло не так, попробуйте обновить страницу" })
        yield put({ type: "COMMENTS/END_LOADING" })
    }
    
}

export function* watchCommentSaga() {
    yield takeLeading("LOAD_COMMENTS", workerSaga)
}

export default function* commentSaga() {
    yield fork(watchCommentSaga)
}
