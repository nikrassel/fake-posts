import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, loadPostsList } from "../../store/posts"

const Main = () => {
    const dispatch = useDispatch()
    function handleDownloadPosts() {
        dispatch(loadPostsList())
    }
    const posts = useSelector(getPosts())
    console.log(posts)
    return (
        <>
            <h1>Main page</h1>
            <div className="container">
                <button className="btn btn-primary" onClick={handleDownloadPosts}>
                    Download posts
                </button>
            </div>
        </>
    )
}

export default Main
