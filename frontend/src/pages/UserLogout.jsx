import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const UserLogout = () => {

    const token = localStorage.getItem('token')
    const path = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            localStorage.removeItem('token')
            path('/login')
        }
    })

  return (
    <div>
      userLogout
    </div>
  )
}

export default UserLogout
