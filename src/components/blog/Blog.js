import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";



function Blog() {
    const [post, setPost] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const loginUser = () => {
        setTimeout(() => {
            navigate("/blogses", {replace: true, state: "hello"})
        }, 1000)
    }


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.name}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={loginUser}>login</button>


        </div>
    );
}

export default Blog;