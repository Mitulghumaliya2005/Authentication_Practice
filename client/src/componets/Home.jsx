import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Usercontext } from '../context/User_Authorizations.jsx'
import { useContext } from 'react'
import axios from 'axios'

export default function Home() {

    const API_URL = 'http://localhost:4000/api'

    const contextstate = useContext(Usercontext)
    console.log(contextstate);

    const localtoken = localStorage.getItem('token')
    console.log(localtoken);

    useEffect(() => {
        async function verifytoken() {
            try {
                const response = await axios.post(`${API_URL}/v3/tokenverify`, { 'token': localtoken })
                console.log(response.data);
                return response.data
            } catch (error) {
                throw new error
            }
        }

        verifytoken().then((response) => {
            console.log(response);
            contextstate.setUser(response)
        }).catch((error) => {
            console.log(error);
        })
    }, [contextstate.isUser])


    return (
        <div>
            I am AT HOME PAGE
            <Link to='/signin' ><button>signIn</button></Link>
            <Link to='/signup' ><button>Signup</button></Link>
        </div>
    )
}
