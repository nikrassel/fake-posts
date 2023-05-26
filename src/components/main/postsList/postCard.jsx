import React from "react"
import { useDispatch } from "react-redux"
import CommentsList from "../comments/commentsList"
import { useNavigate } from "react-router-dom"

const PostCard = ({ post }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = String(post.id)
    function handleShowComments() {
        dispatch({ type: "LOAD_COMMENTS" })
    }
    function handleToUserPage(target) {
        const id = target.target.id
        navigate(`/userinfo/${id}`)
    }
    return (
        <div className="card m-3">
            <div className="card-body">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-6 col-md-4">
                            <img 
                                src="/img/logo.jpg" 
                                alt="" 
                                width="200px" 
                                id={post.userId}
                                type="button"
                                onClick={handleToUserPage}/>
                        </div>
                        <div className="col-sm-6 col-md-8">
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
