import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


const CreateFlash = () =>{

    let {authTokens} = useContext(AuthContext)
 

        let createPack = async (e) => {
            e.preventDefault()
            await fetch(`https://cuecard.pythonanywhere.com/api/createflash/`, {
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