import React from 'react'
import data from './data.json'
import './Message.css';

const messages =  ["言心一辈子心动", "凡心儿生日快乐", "言心贴贴", "凡心宝贝生日快乐🎂🎉永远不烦心！", "[掌宝爱心]祝凡心宝贝圣诞节快乐，生日快乐，每一天都快乐！[掌宝爱心]", "祝俺滴老乡靓仔庄凡心生日快乐", "我们全世界最最最最可爱的宝贝庄凡心小朋友生日快乐!是开心的心"]

const Message = () => {
    setTimeout(() => {
        console.log("Display birthday wishes");
    }, 1000);

    // const color = "#".concat(Math.floor(Math.random()*16777215).toString(16))
    var getRandomColor = (color) => "#".concat(color);
    const backgroundColor = { backgroundColor: getRandomColor(Math.floor(Math.random()*16777215).toString(16))};
    console.log(backgroundColor);

    return (
        <>
            <div className='messages'>
                <ul className='board'>                
                    {data.messages.map((message) => ( 
                        <li>
                            <a className='note'>
                                <h2 className='noteTitle'>{Object.keys(message)[0]}</h2>
                                <p className='noteContent'>{message[Object.keys(message)[0]]}}</p>                
                            </a>
                        </li>  
                    ))}                                                
                </ul>
            </div>
        </>
    )
}



export default Message
