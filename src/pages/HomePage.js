import React, {useContext} from 'react'
import Flashpacks from '../components/Flashpacks';
import './home.css'
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom'


const HomePage = () => {
    let {logoutUser} = useContext(AuthContext)
    return (
        <body>
            <header>
                <button id = 'simple-button'  onClick = {logoutUser}>Logout</button>
                <Link to = {'/'} id = 'simple-button'>home</Link>
                <Link to = {'/createpack'} id = 'simple-button'>+</Link>
            </header>
        
            <main>
                <Flashpacks/>
            </main>
        </body>
    )
    
}
export default HomePage