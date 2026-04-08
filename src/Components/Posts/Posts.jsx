import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePost from '../Singlepost/SinglePost';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            <h2>These are my posts { posts.length}</h2>
            <div>
                {
                    posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;