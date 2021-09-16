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
import mongoose from "../images/skill/mongoose.jpg"
import npm from "../images/skill/npm.png"
import postman from "../images/skill/postman.png"
import vscode from "../images/skill/vscode.png"

import git from "../images/skill/git.png"


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
.int1{
  
    color:#bf4e4e;

}
`
export function Skills() {
    return <A>
        <h1 className="textStyling">Skills & Interests</h1>
        <hr className="line" />
        <div><h1 className="int1">Frontend</h1>
            <div className="skillConatiner"> <div className="box">
                <img className="skillIcon" src={html5} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>Html</h3>
            </div>
             <div className="box">
                <img className="skillIcon" src={css} alt="" />
                <h3 style={{lineHeight:"5px",  color:"#50bd88"}}>Css</h3>
                </div>
                 <div className="box">
                <img className="skillIcon" src={react} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>React</h3>
                </div>
                 <div className="box">
                <img className="skillIcon" src={redux} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>Redux</h3>
                </div>
                 <div className="box">
                <img className="skillIcon" src={materialui} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>Material UI</h3>
                </div>
                 <div className="box">
                <img className="skillIcon" src={js} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>JavaScript</h3>
                </div>
                 


            </div>
        </div>
        <div><h1 className="int1">Backend</h1>
            <div className="skillConatiner">

         <div className="box">
                <img className="skillIcon" src={mongodb} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>MongoDB</h3>
                </div>
                <div className="box">
                <img className="skillIcon" src={node} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>Node.Js</h3>
                </div>
                <div className="box">
                <img className="skillIcon" src={mongoose} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>Mongoose</h3>
                </div>
                 <div className="box">
                <img className="skillIcon" src={express} alt="" />
                <h3  style={{lineHeight:"5px",color:"#50bd88"}}>Express</h3>
        </div>

                
            </div>
        </div>
        <div><h1 className="int1">Tools</h1></div>
        <div className="skillConatiner">
        <div className="box">
                <img className="skillIcon" src={vscode} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>VS-Code</h3>
        </div>
        
           <div className="box">
                <img className="skillIcon" src={postman} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>Postman</h3>
            </div>
             <div className="box">
                <img className="skillIcon" src={npm} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>NPM</h3>
            </div>
             <div className="box">
                <img className="skillIcon" src={git} alt="" />
                <h3 style={{lineHeight:"5px",color:"#50bd88"}}>Git</h3>
            </div>
            
            </div>
    </A>
    
}