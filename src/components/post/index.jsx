import React from "react";
import './style.css'


export default function Post({  post  }){
    return(
        <div className="post-countainer">
            <div>
                <img src={post.image} alt="" />
            </div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </div>
        </div>
    )
}