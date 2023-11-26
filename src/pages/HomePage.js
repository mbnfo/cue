import React, {useContext} from 'react'
import Flashpacks from '../components/Flashpacks';
import './home.css'
import AuthContext from '../context/AuthContext';


const HomePage = () => {
    let {logoutUser} = useContext(AuthContext)
    return (
        <body>
            <header>
                <button id = 'simple-button'  onClick = {logoutUser}>Logout</button>
                <button id = 'simple-button'>home</button>
                <button id = 'simple-button'>+</button>
            </header>
        
            <main>
                <Flashpacks/>
            </main>
        </body>
    )
    
}
export default HomePage