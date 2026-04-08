import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h4>Title: {post.title}</h4>
            <p style={{backgroundColor: "white", color: "black"}}>Post Body:</p>
            <p>{post.body}</p>
            <p>{post.id}</p>
            
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;