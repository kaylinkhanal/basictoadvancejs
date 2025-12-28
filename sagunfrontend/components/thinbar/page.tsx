import { MessageCircleCodeIcon, MessageSquareText, Phone, Settings, User } from 'lucide-react'
import React from 'react'

const Thinbar = () => {
  return (
    <div className='flex flex-col mt-4 space-y-6'>
            <a href="message">
          <MessageSquareText />
        </a>
        <a href="phone">
          <Phone />
        </a>
        <a href="code">
          <MessageCircleCodeIcon />
        </a>
        <a href="user">
          <User />
        </a>
        <div>
          <a href="settings">
          <Settings />
          </a>
        </div>
    </div>
  )
}

export default Thinbar