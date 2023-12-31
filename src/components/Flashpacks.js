import React,{ useState, useContext, useEffect}  from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'


const Flashpacks = () => {
    let{authTokens, logoutUser} = useContext(AuthContext)
    let [discover, setDiscover] = useState(true)
    let [cards, setCards] = useState([])


    useEffect(()=>{
        getCards()
        // eslint-disable-next-line
    }, [discover])
     let getCards = async () => {
        let response = await fetch(`https://cuecard.pythonanywhere.com/api/flash/${discover}/`, {
            method : 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        console.log(response)
        if( response.status === 200){
            setCards(data)
            console.log(response)
        }else if (response.statusText === 'Unauthorized'){
            logoutUser()
        }
     }
    return (
        <div class="card-grid">
                {cards.map(card => (
                    <Link to = {`/flashpack/${card.id}`} key={card.id}>
                        <div class="card">
                            <div class = 'card-text'>
                                <h3>{card.name}</h3>
                                <h5>{card.category}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
                <button id="simple-button" onClick={() => setDiscover(!discover)}>discover packs!</button>
        </div>
    )
}

export default Flashpacks
