import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme="dark">
            <div className="container-fluid">
                <Link to={"/"}>Meeting Room Booking</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/">Available Rooms</a>
                    <a className="nav-link" href="/">My Bookings</a>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar