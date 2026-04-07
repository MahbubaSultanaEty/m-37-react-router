import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();

    return (
        <div>
            <h4>Title: {post.title}</h4>
            <p style={{backgroundColor: "white", color: "black"}}>Post Body:</p>
            <p>{post.body}</p>
            <p>{ post.id}</p>
        </div>
    );
};

export default PostDetails;