import React from 'react'
import Meki from "../../image/logomeki.png"
import {BsFacebook } from 'react-icons/bs'
import {BsInstagram } from 'react-icons/bs'
import {BsGithub } from 'react-icons/bs'
import {BsLinkedin } from 'react-icons/bs'
import {BsStackOverflow } from 'react-icons/bs'
import Typical from 'react-typical'

function Main_home() {
    return (
        <div className="Main_home">
            <section className="sec1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f5efed" fill-opacity="1" d="M0,256L34.3,250.7C68.6,245,137,235,206,208C274.3,181,343,139,411,138.7C480,139,549,181,617,176C685.7,171,754,117,823,96C891.4,75,960,85,1029,101.3C1097.1,117,1166,139,1234,128C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>            
            </section>
            <img src={Meki} alt="" />
            <div className="info">
                <ul>
                    <a href=""><BsFacebook  /></a>
                    <a href=""><BsInstagram /></a>
                    <a href="https://github.com/ToumiMekki"><BsGithub/></a>
                    <a href=""><BsLinkedin/></a>
                    <a href=""><BsStackOverflow/></a>
                </ul>
                <div className="inf">
                    <h2>Hi there,I'M Toumi Ammar  🇩🇿 🇩🇿 🇩🇿</h2>
                    <h1>
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Ui/Ux designer 🙂🔥🤑",
                            2000,
                            "Flayer designer 🔥🍥🤑",
                            2000,
                            "Full-stack web Developer 🥰🥰🤑",
                            2000,
                            "React-Ract_native developer 😝😜🤑",
                            2000,
                            "IA Master degree student  👨🏽‍🎓👨🏾‍💻🤑",
                            2000,
                            ]}/>
                    </h1>
                    <p>I help people and brands reach their goals by designing & <br/> building
                        user-centric digital products and interactive experiences
                    
                    </p>
                    <button className="btn_Abt">AbouteMe</button> <button className="btn_Get">Get Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Main_home
