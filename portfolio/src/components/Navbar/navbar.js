import React from 'react'
import {RiMenu2Fill } from 'react-icons/ri'

function navbar() {
    return (
        <div className="nav">
            <ul className="nav_element">
                <a href="" className="item1"><li ><h2>Meki-Dev</h2></li></a>
                <a href="" className="item2"><li>Home</li></a>
                <a href="" className="item3"><li>AbouteMe</li></a>
                <a href="" className="item4"><li>Resume</li></a>
                <a href="" className="item5"><li>My-Skilles</li></a>
                <a href="" className="item6"><li>Contact.Me</li></a>
                <a href="" className="item6"><li><RiMenu2Fill /></li></a>
            </ul>
        </div>
    )
}

export default navbar
