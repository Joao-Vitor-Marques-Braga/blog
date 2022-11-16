import React from "react";
import './style.css'


export default function FeaturedPost({  post  }){
    return(
        <div className="featured-post-countainer">
            <div>
                <img src={post?.image}/>
            </div>
            <div>
                <h2>{post?.title}</h2>
                <p>{post?.description}</p>
            </div>
        </div>
    )
}