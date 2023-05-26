import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../ui/loader';

const CommentsList = ({ postId }) => {
    const comments = useSelector((state) => state.comments.comments)
    const loadingStatus = useSelector((state) => state.comments.isLoading)
    
    if (loadingStatus) {
        return <Loader />
    }
    if (comments) {
        const postComments = comments.filter((comment) => comment.postId === postId)
        return ( 
            <>
                {postComments.map((comment) => (
                    <div key={comment.id}>
                        <h6>{comment.email}</h6>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </>
        );
    }
}
 
export default CommentsList;