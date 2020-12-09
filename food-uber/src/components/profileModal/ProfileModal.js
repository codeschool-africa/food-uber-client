import React from "react"
import { useState } from "react"
import { MdClose } from "react-icons/all"

import ImgUpload from "../imgUpload/ImgUpload"
import "./profileModal.sass"

const ProfileModal = ({ user, closeModal }) => {
  let [loading, setLoading] = useState(false)
  let [formData, setFormData] = useState({})

  let { name, email, address, location, tel, dp, dp_img } = user
  return (
    <div className="profile-modal">
      <div className="profile-backdrop"></div>
      <div className="container">
        <span onClick={closeModal} className="close">
          <MdClose className="icon" />
        </span>
        <ImgUpload dp_path={dp} dp_img={dp_img} />
      </div>
    </div>
  )
}

export default ProfileModal
