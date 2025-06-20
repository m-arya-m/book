import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'
import { setTokens } from '../lib/api'


function Signup() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        console.log({ username, email, password })
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/signup/`,
                { username, email, password })
            console.log(response.data)
            setTokens(response.data)
            navigate('/')

        } catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <div className="signup">
            <h1>Sign Up </h1>
            <form onSubmit={handleSubmit}>
                <div >
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />
                </div>
                <div >
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </div>
                <button type='submit'>Sign Up!  </button>
                <Link to={`/Login`} > <button type='button' > Log-in</button></Link>
            </form>


        </div>
    )
}

export default Signup