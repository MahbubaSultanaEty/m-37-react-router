import React from 'react';
import { Link, useNavigate } from 'react-router';

const SinglePost = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();
    const handleNavigate = () => {
         navigate(`/posts/${id}`)
    }

    return (
        <div style={{
            border: "3px solid white",
            padding: "5px",
            margin: "10px"
        }}>
            <h5>{title} { id}</h5>
            <Link to={`/posts/${id}`}>
                <button>Show details { id}</button>
            </Link>
            <button onClick={handleNavigate}>Detail of { id}</button>
        </div>
    );
};

export default SinglePost;