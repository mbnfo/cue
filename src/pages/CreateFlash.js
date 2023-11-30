import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import './form.css'


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
                body : JSON.stringify({'name' : e.target.name.value})
            })
            window.location.href = '/#'

        }
    

    return (
        <div id = 'form-section'>
            <form onSubmit = {createPack}>
                <label for = 'name'>create cue cards pack</label>
                <input type = 'text' name = 'name' placeholder = 'Name your cue cards pack'/>
                <input type = 'submit'/>
            </form>
        </div>
    )
}

export default CreateFlash