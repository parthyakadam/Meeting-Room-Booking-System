import React from 'react'

function RoomDetails(props) {
  return (
    
    <h3>Name: {props.roomDetails.rooms[0].name}</h3>
  )
}

export default RoomDetails