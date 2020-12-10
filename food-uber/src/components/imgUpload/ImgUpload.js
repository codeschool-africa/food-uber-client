import React, { useState } from "react"
import { FaCamera } from "react-icons/all"
import axios from "axios"

import "./imgUpload.sass"

const ImgUpload = ({ dp_path, dp_img }) => {
  let [dp, setDp] = useState(null)
  let [loading, setLoading] = useState(false)
  let [imgData, setImgData] = useState(null)
  const handleChange = (e) => {
    if (e.target.files) {
      setDp(e.target.files[0])
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        setImgData(reader.result)
        setDp(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
      // console.log(dp, imgData)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    let token = localStorage.getItem("token")
    // let formData = new FormData()
    // formData.append("dp", dp)
    let config = {
      headers: {
        // "Content-Type": "multipart/form-data; boundary=AaB03x",
        "Content-Type": "application/json",
        authorization: token,
      },
    }
    if (dp) {
      // console.log(dp)
      let data = {
        dp,
      }
      axios
        .post("/upload-dp", data, config)
        .then((res) => {
          console.log(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    } else {
      console.log("no dp")
      setLoading(false)
    }
  }
  return (
    <div className="img-upload">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="img-upload">
          <input
            type="file"
            id="img-upload"
            onChange={(e) => handleChange(e)}
          />
          <div className="img-container">
            <div className="img-cover"></div>
            {imgData ? (
              <img src={imgData} alt="newly uploaded" />
            ) : (
              <img src={dp_path ? dp_path : dp_img} alt="dp" />
            )}

            <FaCamera className="icon" />
          </div>
        </label>
        <button disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  )
}

export default ImgUpload
