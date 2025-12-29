import React from 'react'

const UserCard = ({item}) => {
  return (
    <div className='shadow-sm p-2 m-2 rounded-lg bg-white'>
   {item.name} 
   {item.lastMsg}
   {item.time}
  </div>
  )
}

export default UserCard