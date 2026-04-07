import React from 'react';
import { Link } from 'react-router';

const SinglePost = ({ post }) => {
    const { id, title, description } = post;
    return (
        <div style={{
            border: "3px solid white",
            padding: "5px",
            margin: "10px"
        }}>
            <h5>{title} { id}</h5>
            <Link to={`/posts/${id}`}>
                <button>Show details</button>
            </Link>
        </div>
    );
};

export default SinglePost;