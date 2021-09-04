import styled from "styled-components"

const AboutWrapper = styled.div`
margin-top: 100px;
.line{
width: 250px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);
}
`

export function About() {
    return <AboutWrapper>
        <div className="About">
        <h1>About Me</h1>
        <hr className="line"/>
         <p className="abouttext" >Recent Electronic & communication graduate with a passion of developing scalable web application and working across the full stack. I have designed the clone of some of the websites using React, Node.js and Mongodb. Curious to learn and apply my skills on a large scale.</p>      
         
        </div>
        </AboutWrapper>
}