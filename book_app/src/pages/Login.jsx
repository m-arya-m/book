import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { setTokens } from '../lib/api'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/token/`, formData)
      setTokens({
        access: response.data.access,
        refresh: response.data.refresh
      })
      navigate('/')
    } catch (err) {
      console.log(err)
      setError('Invalid username or password')
    }
  }

  return (
    <div className='main-content'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        /></div>
        <div className='form-group'>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /></div>
        <button type="submit">Login</button>
        <h5>'I don't have acount'</h5><Link to={'/signup'}><button type='button'>Signup</button></Link>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login