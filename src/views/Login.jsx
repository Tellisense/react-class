import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    email: '',
    password: '',
  })



  const handleSubmit = async (e) => {
    e.preventDefault()  
    try {
      const { data } = await axios.post('http://localhost:1337/auth/local/register', login)
      setLogin({
        username: '',
        email: '',
        password: '',
      })
       localStorage.setItem('token', data.jwt)
    } catch(error){
     console.log(error)
    }
  }

  const handleChange = e => {

    setLogin(
      {
        ...login,
        [e.target.name]: e.target.value
      }
    )
    console.log(login)
  }




  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: 
    
      <input className="m-4 border-4 p-4" type="text" name="username" value={login.username} 
      onChange={handleChange} />
        </label>
      <br />
       <label>
         Email:
      <input className="m-4 border-4 p-4" type="email" name="email" value={login.email} onChange={handleChange} />
      </label>
  
      <br />
      <label>Password: 
      <input className="m-4 border-4 p-4" type="password" name="password" value={login.password} onChange={handleChange} />
      </label>
      
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Login
