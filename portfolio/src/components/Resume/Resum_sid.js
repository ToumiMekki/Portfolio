import React from 'react'
import {BsPersonSquare } from 'react-icons/bs'
import {BsArrowCounterclockwise } from 'react-icons/bs'
import {FaLaptopCode} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'
import {BiAtom} from 'react-icons/bi'
function Resum_sid() {
    return (
        <div className="Resum_sid">
            <ul>
                <a href="">
                    <li><BsPersonSquare /> Education</li>
                </a>
                <a href="">
                    <li><BsArrowCounterclockwise/> History</li>
                </a>
                <a href="">
                    <li><FaLaptopCode/> Programing Skills</li>
                </a>
                <a href="">
                    <li><VscProject/> Projects</li>
                </a>
                <a href="">
                    <li><BiAtom/> Interests</li>
                </a>
            </ul>
        </div>
    )
}

export default Resum_sid
