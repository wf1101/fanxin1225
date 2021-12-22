import React from 'react'
import data from './data.json'
import './Message.css';

const Message = () => {
    setTimeout(() => {
        console.log("Display birthday wishes");
    }, 1000);

    return (
        <div className='messages'>
            <ul className='board'>                
                {data.messages.map((message) => ( 
                    <li>
                        <a className='note'>
                            <h2 className='noteTitle'>{Object.keys(message)[0]}</h2>
                            <p className='noteContent'>{message[Object.keys(message)[0]]}</p>                
                        </a>
                    </li>  
                ))}                                                
            </ul>
        </div>
    )
}

export default Message
