import React from "react";
import classes from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes['top-img']}>
        <img src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_1920%2Cc_limit/BlackForest-Germany-GettyImages-147180370.jpg" alt=""/>
      </div>
      <div>
        <img src="https://dynl.mktgcdn.com/p/kspUz6CIjZBCCEbILUAVysEvGAdJ-l0lBMCJHDbUl-o/298x312.png" alt=""/>
        ava + description
      </div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
        <div>Post 3</div>
      </div>
    </div>

  )
}