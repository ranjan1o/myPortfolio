import styled from "styled-components"
import "./Style.css"
import profilepic from "../images/profilepic.jpeg"
import resume from "../Resume/resume.pdf"
import { init } from "ityped";
import { useEffect, useRef } from "react";
const A1 = styled.div`

margin-top: 80px;
.icon{
width:250px ;
height: 250px;
border: 1px solid black;
background-color: teal;
border-radius: 50%;

}
@media screen and (max-width: 600px) {
  .iou{
    width: 80%;
    margin: auto;

  }
  .grid1{
    display: grid;
    grid-template-columns: 100%;
  }
  .display{
display: none;
}
.grid2{
  width: 100%;
  margin: auto;
}
}
.colorp{
  color: #ff00ff;
}
.cvbtn{
    border-radius: 25px;
    padding: 20px 30px;
    background: linear-gradient(
270deg
,rgb(19,173,199) 0%,rgb(148,93,214) 100%);
}
`

export function Header() {
  const textRef = useRef();
   useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Full-Stack Web Developer","MERN Full Stack Developer"],
    });
  }, []);
    return <A1 >
        <div className="grid1">
        <div className="iou">
        <h1 className="smt textStyling">Welcome To</h1>
<h1 className="smt textStyling">My Personal Portfolio</h1>
          <h1 className="colorp textStyling">Hi, I am Ranjan Giri</h1>
          <h3><span ref={textRef} className="colorp textStyling"></span></h3>
                <div><button className="cvbtn textStyling"><a href={resume} target="_blank" rel="noreferrer" >Resume</a></button></div>
        </div>
        
            <div className="display" >
            <img className="icon"  src={profilepic} alt="" />
            </div>
        </div>
        
    
    </A1>
    
}
