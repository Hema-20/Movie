import { IconButton } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import TopBar from './TopBar'

export default function Counter() {
    let [like,setLike]  =useState(0);
    let [dislike,setDislike] = useState(0);

    const incrementLike=()=> setLike(like+1);
    const incrementDisLike=()=> setDislike(dislike+1);
  return (
    <div>

        <IconButton arial-label="Like" color="primary" onClick={incrementLike}>
         <Badge badgeContent={like} color="primary">
          👍
         </Badge>
        </IconButton>
        <IconButton arial-label="DisLike" color="error" onClick={incrementDisLike}>
         <Badge badgeContent={dislike} color="error">
          👎
         </Badge>
        </IconButton>
        {/* <button onClick={()=> setLike(like+1)}>👍 {like}</button>
        <button onClick={()=> setDislike(dislike+1)}>👎{dislike}</button> */}
    </div>
  )
}
