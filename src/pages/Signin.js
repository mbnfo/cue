import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import './signin.css'
const Signin = () =>{

let {signinUser} = useContext(AuthContext)
    return (
        <body>
            <div class="signin-container">
                <h2>Sign In</h2>
                <form onSubmit = {signinUser}>
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text"  name="username" required/>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password"  name="password" required/>
                    </div>
                    <button type="submit" id="submit-button">Sign In</button>
                </form>
            </div>
        </body>
    )
}
export default Signin