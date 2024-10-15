import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const navigate = useNavigate();
    const API_URL = 'http://localhost:4000/api'

    const [userinformation, setuserInformations] = useState({
        name: "",
        email: "",
        password: "",
        conformpassword: "",
    })

    function onchangehandler(Event) {

        setuserInformations((curr) => {
            return (
                { ...curr, [Event.target.name]: Event.target.value }
            )
        })

    }

    function submitformhandler(Event) {
        Event.preventDefault()
        console.log(userinformation);
        if ((userinformation.password.trim() == "") !== (userinformation.conformpassword.trim() == "")) {
            alert("ConformPassword Is InVallid")
        } else {
            async function signupuser() {
                try {
                    console.log("Signup caled");
                    const reponse = await axios.post(`${API_URL}/v1/signup`, userinformation)
                    return reponse.data;
                } catch (error) {
                    throw new error
                }
            }

            signupuser().then((Response) => {
                console.log(Response);
                localStorage.setItem('token', Response.token)
                navigate("/")
            }).catch((error) => {
                console.log(error);
            })
        }

        setuserInformations({
            name: "",
            email: "",
            password: "",
            conformpassword: "",
        })
    }

    return (
        <div>
            <h1>SignUp</h1>
            <form>
                <label htmlFor='name'>Name: </label>
                <input
                    id='name'
                    placeholder='Enter your name'
                    value={userinformation.name}
                    name='name'
                    type='text'
                    onChange={onchangehandler}
                /> <br />
                <label htmlFor='email'>email: </label>
                <input
                    id='email'
                    value={userinformation.email}
                    name='email'
                    type='email'
                    onChange={onchangehandler}
                /> <br />
                <label htmlFor='password'>password: </label>
                <input
                    id='password'
                    type='password'
                    value={userinformation.password}
                    name='password'
                    onChange={onchangehandler}
                /> <br />
                <label htmlFor='conformpassword'>conform password: </label>
                <input
                    id='conformpassword'
                    type='password'
                    value={userinformation.conformpassword}
                    name='conformpassword'
                    onChange={onchangehandler}
                /> <br />
                <button onClick={submitformhandler}>Sign Up</button>
            </form>
        </div>
    )
}
