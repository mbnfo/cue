import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom'

const LoginPage = () => {
    let{loginUser} = useContext(AuthContext)
    return (
        <body>
            <div class="signin-container">
                <h2>Login</h2>
                <form onSubmit = {loginUser}>
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text"  name="username" required/>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password"  name="password" required/>
                    </div>
                    <button type="submit" id="submit-button">Login</button>
                </form>
                <Link to = '/login'>already have an account? login</Link>
            </div>
        </body>
    )
}

export default LoginPage