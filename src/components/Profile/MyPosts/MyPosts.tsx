import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      <div>
        <h2> My posts</h2>
        <div>
          <textarea>New post</textarea>
        </div>
      </div>
      <div>
        <Post message="Hi!"/>
        <Post message="Hello!"/>
        <Post message="Holla"/>
      </div>
    </div>

  )
}