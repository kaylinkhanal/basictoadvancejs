'use client'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const Like = () => {

    const[Liked, setLiked] = useState(false)
    const handleLike = () =>{
        setLiked(!Liked)
    }

  return (
    <div>
        <button onClick={handleLike}> <ThumbsUp></ThumbsUp></button>
    </div>
  )
}

export default Like