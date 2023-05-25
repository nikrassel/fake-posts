import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import postSaga from "../sagas/postSaga"
import postsReducer from "./posts"
import commentsReducer from "./comments"
import commentSaga from "../sagas/commentSaga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(postSaga)
sagaMiddleware.run(commentSaga)
