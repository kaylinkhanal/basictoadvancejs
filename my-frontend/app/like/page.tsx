'use client'
import { ThumbsUp } from 'lucide-react'
import { MotionConfig } from 'motion/react'
import React, { useState } from 'react'
import {motion } from 'motion/react'
const Like = () => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className='flex justify-center items-center m-4 '>
      <motion.button whileHover={{scale:1.05}} onClick={handleLike}>
        <ThumbsUp
          className={liked ? 'text-blue-700 text-2xl' : 'text-gray-500 text-xl'}
        />
      </motion.button>
    </div>
  )
}

export default Like
