import React from "react";
import classes from './Post.module.css'

export const Post = (props:any) => {
  return (
    <div>
        <div>{props.message}</div>
    </div>

  )
}