'use client'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const Like = () => {
    const [liked, setLiked] = useState(false);
    function handleLike(){
        setLiked(liked? false:true)
    }
  return (
    <div>
        <button onClick={handleLike} className={p-4 m-4 shadow-md ${liked? 'text-blue-700': 'text-gray-700'}}>
            <ThumbsUp/>Like
            </button>
    </div>
  )
}

export default Like