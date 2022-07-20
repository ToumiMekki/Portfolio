import React from 'react'

function Contact() {
    return (
        <div className="Contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="#f5efed" fill-opacity="1" d="M0,128L15,149.3C30,171,60,213,90,245.3C120,277,150,299,180,288C210,277,240,235,270,186.7C300,139,330,85,360,80C390,75,420,117,450,165.3C480,213,510,267,540,272C570,277,600,235,630,213.3C660,192,690,192,720,176C750,160,780,128,810,122.7C840,117,870,139,900,160C930,181,960,203,990,197.3C1020,192,1050,160,1080,149.3C1110,139,1140,149,1170,170.7C1200,192,1230,224,1260,229.3C1290,235,1320,213,1350,213.3C1380,213,1410,235,1425,245.3L1440,256L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path>
                </svg>
                <h1>Get in touch!</h1>
                <h3>Contact Me for a Work 🤪🤪🤩 </h3>
                <ul>
                    <li><button>Maps</button></li>
                    <li><button>Send Message</button></li>
                </ul>
            <div className="cont">
            <form action="">
                    <label htmlFor="">Your Name</label><br />
                    <input type="text" /><br /><br />
                    <label htmlFor="">Email</label><br />
                    <input type="text" /><br /><br />
                    <label htmlFor="">Message</label><br />
                    <textarea name="" id="" cols="30" rows="10"></textarea><br /><br />
                    <button>Send Message</button>            
            </form>
            </div>
        </div>
    )
}

export default Contact
