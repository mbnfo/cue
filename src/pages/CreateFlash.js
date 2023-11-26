import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


const CreateFlash = () =>{

    let {authTokens} = useContext(AuthContext)
 

        let createPack = async (e) => {
            e.preventDefault()
            await fetch(`http://127.0.0.1:8000/api/createflash/`, {
                method: 'POST', 
                headers :{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                },
                body : JSON.stringify({'name' : e.target.name.value} )
            })

        }
    

    return (
        <div>
            <form onSubmit = {createPack}>
                <input type = 'text' name = 'name'/>
                <input type = 'submit'/>
            </form>
        </div>
    )
}

export default CreateFlash