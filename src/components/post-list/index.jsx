import React from "react";
import Post from "../post";

import './style.css'

export default function PostList ({posts}) {
    return(
        <div className="post-list-countainer">
            {
                posts && posts.map((post) => {
                    return <Post post={post}/>;
                })
            }
        </div>
    )
}