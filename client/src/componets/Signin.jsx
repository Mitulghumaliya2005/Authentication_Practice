import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signin() {

  const navigate = useNavigate()

  const API_URL = 'http://localhost:4000/api'
  const [logininformation, setloginInformations] = useState({
    email: "",
    password: "",
  })

  function onchangehandler(Event) {
    setloginInformations((curr) => {
      return (
        { ...curr, [Event.target.name]: Event.target.value }
      )
    })
  }

  function submitloginform(Event) {
    Event.preventDefault();

    async function signin() {
      try {
        const response = await axios.post(`${API_URL}/v2/signin`, logininformation)
        // console.log(response.data);

        return response.data
      } catch (error) {
        console.log(error);

        // throw new error
      }
    }

    signin().then((response) => {
      console.log(response);
      localStorage.setItem("token", response.token)
      navigate("/")
    }).catch((error) => {
      console.log(error);
    })

    setloginInformations({
      email: "",
      password: "",
    })

  }

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <form>
          <label htmlFor='email'>email: </label>
          <input
            id='email'
            name='email'
            value={logininformation.email}
            type='email'
            onChange={onchangehandler}
          /><br />

          <label htmlFor='password'>password: </label>
          <input
            id='password'
            name='password'
            value={logininformation.password}
            type='password'
            onChange={onchangehandler}
          /><br /> <br />

          <button onClick={submitloginform}>Log In</button>

        </form>
      </div>

    </div>
  )
}
