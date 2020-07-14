import React, {useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        password: ""
    })

    const {name, email, tel, password} = formData
    const handleChange = e => {
        let {name, value} = e.target
        setFormData({...formData, [name]: value})
        // console.log(formData)
    }
    const handleSubmit = e => {
        e.preventDefault()
        let newUser = {
            name, email, tel, password
        }
        axios.post("http://faraja-food-uber.herokuapp.com/api/register", newUser)
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
    return (
        <div>
            <form onSubmit={e=>handleSubmit(e)}>
            <input type="text" name="name" placeholder="Full name" onChange={e => {handleChange(e)}} /> <br/><br/>
                <input type="email" name="email" placeholder="email" onChange={e => {handleChange(e)}}/><br/><br/>
                <input type="tel" name="tel" placeholder="Phone number" onChange={e => {handleChange(e)}}/><br/><br/>
                <input type="text" name="password" placeholder="password" onChange={e => {handleChange(e)}}/><br/><br/>
                <input type="submit" value="Register"/>
            </form><br/><br/>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Register
