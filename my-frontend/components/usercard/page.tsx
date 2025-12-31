import React from 'react'

const UserCard = ({ item }) => {
  return (
    <div >
      <div >
        <div>{item.name} </div>
        <div>{item.position}</div>
        {item.time}
      </div>
    </div>

  )
}

export default UserCard