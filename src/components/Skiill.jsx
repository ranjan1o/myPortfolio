import styled from "styled-components"
import html5 from "../images/skill/html5.png"
import materialui from "../images/skill/materialui.png"
import mongodb from "../images/skill/mongodb.png"
import node from "../images/skill/nodejs.png"
import redux from "../images/skill/redux.png"
import express from "../images/skill/expressjs.png"
import css from "../images/skill/css.png"
import react from "../images/skill/react.png"
import js from "../images/skill/JS.png"


const A = styled.div`
margin-top: 100px;
.line{
width: 300px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);
}


`
export function Skills() {
    return <A>
        <h1 className="textStyling">Skills & Interests</h1>
        <hr className="line"/>
    <div className="skillConatiner">
        <div className="box">
            <img className="skillIcon" src={html5} alt="" />
        </div>
         <div className="box">
            <img className="skillIcon" src={css} alt="" />
        </div>
          <div className="box">
            <img className="skillIcon" src={react} alt="" />
        </div>
         <div className="box">
            <img className="skillIcon" src={redux} alt="" />
        </div>
         <div className="box">
            <img className="skillIcon" src={node} alt="" />
        </div>
        <div className="box">
            <img className="skillIcon" src={express} alt="" />
        </div>
         <div className="box">
            <img className="skillIcon" src={materialui} alt="" />
        </div>
           <div className="box">
            <img className="skillIcon" src={mongodb} alt="" />
            </div>
             <div className="box">
            <img className="skillIcon" src={js} alt="" />
            </div>
            </div>
    </A>
    
}