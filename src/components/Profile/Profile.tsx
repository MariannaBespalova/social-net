import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div>
      <div className={classes['top-img']}>
        <img src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_1920%2Cc_limit/BlackForest-Germany-GettyImages-147180370.jpg" alt=""/>
      </div>
      <div>
        <img src="https://dynl.mktgcdn.com/p/kspUz6CIjZBCCEbILUAVysEvGAdJ-l0lBMCJHDbUl-o/298x312.png" alt=""/>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}