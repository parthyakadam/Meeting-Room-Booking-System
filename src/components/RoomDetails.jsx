import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

function RoomDetails(props) {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('')

    const rooms = props.roomDetails.rooms
    const resource = 'data/meetingRoom.json'

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value
        
        setSelectedTimeSlot(selectedOption)
        console.log(selectedOption);
        console.log(selectedOption.type);

        if (selectedOption === rooms[0].timeSlots.startTime[0]) {
            console.log("Room found");
            console.log("Values before changing: " + rooms[0].timeSlots.availability[0]);

        axios.put(`${BASE_URL}/${resource}`)
        .then(() => {
            console.log("inside here ");
            rooms[0].timeSlots.availability[0] = !rooms[0].timeSlots.availability[0]
        })

            console.log("Changed value is: " + rooms[0].timeSlots.availability[0]);
        } else {
            console.log("Nto found");
        }

        switch (selectedOption) {
            case "09:00 AM":
                
                break;
        
            default:
                break;
        }
    }

    const bookMeeting = () => {
        console.log("Meeting booked for time: " + selectedTimeSlot);
    }

  return (
    <>
        <div className="card m-3 " style={{ maxWidth: '540px' }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="logo192.png" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h3 className="card-title">
                    {rooms[0].name}
                </h3>
                <h5>Room Details </h5>
                <h6>Capacity: <span>{rooms[0].capacity}</span></h6> 

                <div className="dropdown">
                    Select start time: 
                    <select
                        className="form-select"
                        value={selectedTimeSlot} // Set the selected value
                        onChange={handleSelectChange} // Step 3: Event handler
                    >
                        <option value="">Select an option</option>
                        <option>
                            {rooms[0].timeSlots.startTime[0]}
                        </option>
                        <option> 
                            {rooms[1].timeSlots.startTime[1]}
                        </option>
                        <option >
                            {rooms[2].timeSlots.startTime[2]}
                        </option>
                    </select>
                </div>

                <h4>
                    Availability: 
                    {rooms[0].timeSlots.availability.some((timeSlot) => timeSlot === true)
                    === true ? (
                                <span> Meeting Room Available</span>
                            ) : (
                                <span> Room unavailable</span>
                            )
                        }
                </h4>
                <div className="d-grid col-6 mx-auto">
                <button onClick={bookMeeting} type="button" className="btn btn-primary">Book Meeting Slot</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default RoomDetails