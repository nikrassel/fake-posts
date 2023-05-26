import React from "react"
import { useDispatch } from "react-redux"
import CommentsList from "../comments/commentsList"

const PostCard = ({ post }) => {
    const dispatch = useDispatch()
    const id = String(post.id)
    function handleShowComments() {
        dispatch({ type: "LOAD_COMMENTS" })
    }
    return (
        <div className="card m-3">
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src="/img/logo.jpg" alt="" width="200px" />
                        </div>
                        <div className="col">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <p>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#id${id}`}
                                    aria-expanded="false"
                                    onClick={handleShowComments}
                                >
                                    Показать комментарии
                                </button>
                            </p>
                            <div className="collapse" id={`id${id}`}>
                                <div className="card card-body">
                                    <CommentsList postId={post.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
