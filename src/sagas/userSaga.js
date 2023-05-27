import usersService from "../services/users.service"
import { call, fork, put, takeLeading } from "redux-saga/effects"
import { sleep } from "../utils/sleep"

async function usersGet() {
    const request = await usersService.get()
    sleep(500)
    return request
}

export function* workerSaga() {
    try {
        yield put({ type: "USERS/BEGIN_LOADING" })
        const result = yield call(usersGet)
        yield put({ type: "USERS/SET", payload: result })
        yield put({ type: "USERS/END_LOADING" })
    } catch (error) {
        yield put({ type: "ERROR/SHOW_ALERT", 
            payload:"Что-то пошло не так, попробуйте обновить страницу" })
        yield put({ type: "USERS/END_LOADING" })
    }
}

export function* watchUserSaga() {
    yield takeLeading("LOAD_USERS", workerSaga)
}

export default function* userSaga() {
    yield fork(watchUserSaga)
}
