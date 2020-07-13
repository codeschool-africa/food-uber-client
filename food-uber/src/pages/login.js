import React, {useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        dp: ""
    })
    const [auth, setAuth] = useState(false)

    const [userData, setUserData] = useState({
        Name: "",
        profile: ""
    })

    const {email, password, dp} = formData
    const {Name, profile} = userData
    const handleChange = e => {
        let {name, value} = e.target
        setFormData({...formData, [name]: value})
        console.log(formData)
    }
    const handleSubmit = e => {
        e.preventDefault()
        let user = {
            email, password
        }
        axios.post("http://faraja-food-uber.herokuapp.com/api/login", user)
        .then(res => {
            console.log(res.data)
            setUserData({
                Name: res.data.result[0].name,
                profile: res.data.result[0].dp_path
            })
            if (res.data.session.isLoggedIn) {
                setAuth(true)
            }
        })
        .catch(err => {
            if(err) {
                console.log(err)
            } else {
                console.log("Internet connection error")
            }
        })
    }

    const uploadDp = e => {
        e.preventDefault()
        let user = {
            email, password
        }
        axios.post("http://faraja-food-uber.herokuapp.com/api/upload-dp", user)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            if(err) {
                console.log(err.response.data)
            } else {
                console.log("Internet connection error")
            }
        })
    }

    console.log(auth, userData)
    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                <input type="text" name="email" placeholder="email" onChange={e => {handleChange(e)}}/><br/><br/>
                <input type="text" name="password" placeholder="password" onChange={e => {handleChange(e)}}/><br/><br/>
                <input type="submit" value="Login"/>
            </form><br/><br/>
            <Link to="/register">Register</Link>
            {auth && <form onSubmit={e => {uploadDp(e)}}>
            <h3>Hello {Name && Name} please upload your profile image</h3>
            <input type="file" onChange={e => handleChange(e)} name="dp"/>
            <input type="submit" value="Upload Dp"/>
            </form>}
        </div>
    )
}

export default Login
