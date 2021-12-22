import React from 'react'
import './App.css';

function Header() {
    return (
        <div className="header">
            <span className='happyBirthday'>
                庄凡心生日留言板
            </span>
            <br/>
            <a
                className="headerLink"
                href="https://huati.weibo.com/5769150"
                target="_blank"
                rel="noopener noreferrer"
            >
                岑北南超话
            </a>
        </div>
    )
}

export default Header
