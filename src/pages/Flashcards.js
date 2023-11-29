import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../context/AuthContext';
import './flashcards.css'

const Flashcards = ({match}) => {
    let flashpackId = match.params.id
    let {authTokens, logoutUser, user} = useContext(AuthContext)
    let [flash, setFlashcards] = useState([])
    let [cardData, setCardData] = useState([])
    let [createResponse, setCreateResponse] = useState(false)
    let [answerPrompt, setAnswerPrompt] = useState(false)

    useEffect (() => {
        flashpack()
        // eslint-disable-next-line
    }, [flash])

    let flashpack = async () => {
        let response = await fetch(`https://cuecard.pythonanywhere.com/api/flashpack/${flashpackId}`, {
            method : 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        setFlashcards(data)
    }

    let createCard = async () =>{
         await fetch ('https://cuecard.pythonanywhere.com/api/createcard/', {
            method: 'POST', 
            headers : {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify(cardData)
        })
        
    }
                                                                                                                                                                                                                                                                                                                                                                       
    let cardInfo = (e) => {
        e.preventDefault()
        if (!answerPrompt){
            setCardData({'question' : e.target.question.value, packId: flashpackId})
            setAnswerPrompt(!answerPrompt)
        }else 
        {                                                     
            setCardData(cardData.answer =  e.target.answer.value)
            setAnswerPrompt(!answerPrompt)
            setCreateResponse(!createResponse)
            createCard()
            console.log(cardData, createResponse)
        }
    }

    return (
        
        <body>
            <header>
                <button id = 'simple-button'  onClick = {logoutUser}>Logout</button>
                <Link to = {'/'} id = 'simple-button'>home</Link>
                <Link to = {'/createpack'} id = 'simple-button'>+</Link>
                <h5> signed in as {user.username}</h5>
            </header>
        
            <main>
                <div class="card-container-2">
                    {flash.map(cards => (
                        <div className="cards"  key= {cards.id}>
                            <div className = 'front'>
                                <h2>Front</h2>
                                <p>{cards.question}</p>
                            </div>
                            <div className = 'back'>
                                <h2>Back</h2>
                                <p>{cards.answer}</p>
                            </div>
                        </div>
                    ))}
                {createResponse === false ? 
                    <button id = 'create-card-button' onClick = {(()=>{
                        setCreateResponse(!createResponse)
                    })}>
                        <h2>Create new card</h2>
                    </button>: 
                    !answerPrompt?
                    <div className = 'cards'>
                        <form onSubmit = {cardInfo}>
                            <h2>Question</h2>
                            <input type = 'text' name = 'question'/>
                            <input type = 'submit'/>
                        </form>
                    </div>
                    :
                    <div className = 'cards'>
                        <form onSubmit = {cardInfo}>
                            <h2>Answer</h2>
                            <input type = 'text' name = 'answer'/>
                            <input type = 'submit'/>
                        </form>
                    </div>
                }
                </div>
            </main>
        </body>
    )
}

export default Flashcards