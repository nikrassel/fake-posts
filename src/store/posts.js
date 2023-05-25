import { createSlice } from "@reduxjs/toolkit"
import postsService from "../services/posts.service"

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        entities: null,
        isLoading: false,
        error: null
    },
    reducers: {
        postsRequested: (state) => {
            state.isLoading = true
        },
        postsReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        postsRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: postsReducer, actions } = postsSlice
const { postsRequested, postsReceved, postsRequestFailed} = actions

export const loadPostsList = () => async (dispatch) => {
    dispatch(postsRequested())
    try {
        const content = await postsService.get()
        dispatch(postsReceved(content))
    } catch (error) {
        dispatch(postsRequestFailed())
    }
}

export const getPosts = () => (state) => state.posts.entities
export const getIsLoading = () => (state) => state.posts.entities
export default postsReducer