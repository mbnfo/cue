import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext';

const Header = () => {
    let {user,logoutUser} = useContext(AuthContext)
    return (
        <div>
            
            {user && <p>hello {user.username}</p>}
            {user ?<div>
            <a href= '/'>Home</a>
            <span>|</span> 
            <p onClick = {logoutUser}>logout</p></div>: 
            <div><a href= '/login'>login</a>
            <span>|</span> 
            <a href = 'signin'>signin</a>
            </div>}
        </div>
    )
}

export default Header