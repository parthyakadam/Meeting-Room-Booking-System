import React from 'react'
import { useState, useEffect } from 'react'
import { callAPI } from '../utils/callAPI'
import LoadingIndicator from './LoadingIndicator'
import RoomDetails from './RoomDetails'

function HomePage() {
    const [roomDetails, setRoomDetails] = useState(null)

    const showRoomDetails = () => {
        try {
            callAPI(`data/meetingRoom.json`)
            .then((data) => {
                setRoomDetails(data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        showRoomDetails()
            // calling the showRoomDetails() function when the component is rendered
    }, [])

  return (
    <>
        <h1 className=''>Welcome to online room booking system</h1>

        {/* conditional rendering based on whether data has been loaded or not */}
        {roomDetails && roomDetails.rooms ? (
            <RoomDetails 
                roomDetails={roomDetails}
            />
        ) 
            : (<LoadingIndicator />)
        }
    </>
  )
}

export default HomePage