import React, { useState } from "react"

import ProfileModal from "../profileModal/ProfileModal"

import dp from "../../assets/images/dp.png"

import "./userProfile.sass"

let UserCard = ({ name, descr }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{descr}</p>
    </div>
  )
}

const UserProfile = ({ name, email, location, address, dp, tel }) => {
  const [open, setOpen] = useState(false)
  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }

  let user = { name, email, location, address, dp, tel }
  return (
    <div className="profile">
      <div className="container">
        <div className="dp">
          <div className="top">
            <span onClick={openModal}>Edit Profile</span>
          </div>
          <div className="img-container">
            {dp ? (
              <img src={dp} alt={`${name} dp`} />
            ) : (
              <img src={dp} alt="user" />
            )}
          </div>
          <div className="user-details">
            <span>{name}</span>
          </div>
        </div>
        <span>We don't share your information anywhere</span>
        <UserCard name="Email Address" descr={email} />
        <UserCard name="Tel Number" descr={tel} />
        {address && <UserCard name="Address" descr={address} />}
      </div>
      {open && <ProfileModal closeModal={closeModal} user={user} />}
    </div>
  )
}

export default UserProfile
