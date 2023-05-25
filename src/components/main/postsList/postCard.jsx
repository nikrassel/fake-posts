import React from 'react';

const PostCard = ({ post }) => {
    return ( 
        <div className="card m-3">
        <div className="card-body">
            <div className='container'>
                <div className='row'>
                <div className='col-2'>
                    <img src="/img/logo.jpg" alt="" width="200px"/>
                </div>
                <div className='col'>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <button className='btn btn-primary'>Показать комментарии</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default PostCard;