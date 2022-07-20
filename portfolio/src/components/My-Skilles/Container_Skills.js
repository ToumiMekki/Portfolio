import React from 'react'
function Container_Skills(props) {
    const {Skill_logo ,Skill_title , Skill_des}=props;
    return (
        <div className="Container_Skills">
            <img src={Skill_logo} alt="" />
            <h1>{Skill_title}</h1>
            <h3>{Skill_des}</h3>
        </div>
    )
}

export default Container_Skills
