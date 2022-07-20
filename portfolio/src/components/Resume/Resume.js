import React from 'react'
import Resum_sid from './Resum_sid'
import Resume_main from './Resume_main'



function Resume() {
    return (
        <div className="Resume">
            <div className="title_resume">
            <h1>Resume</h1>
            <h5>My Format Bio Details</h5>
            </div>
            <Resum_sid/>
            <hr />
            <Resume_main />
        </div>
    )
}

export default Resume
