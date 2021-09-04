import styled from "styled-components"
import "./Style.css"
import resume from "../Resume/resume.pdf"
import profilepic from "../images/profilepic.jpg"
const A1 = styled.div`

margin-top: 80px;
.icon{
width:200px ;
height: 200px;
border: 1px solid black;
background-color: teal;
border-radius: 50%;

}
@media screen and (max-width: 600px) {
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
}`

export function Header() {
    return <A1 >
        <div className="grid1 grid2">
        <div className="">
        <h1 className="smt">Welcome To</h1>
<h1 className="smt">My Personal Portfolio</h1>
                <h1 className="colorp">Hi, I am Ranjan Giri</h1>
                <div><button className="cvbtn"><a href={resume} download >Download My CV</a></button></div>
        </div>
        
            <div className="display" >
            <img className="icon"  src={profilepic} alt="" />
            </div>
        </div>
        
    
    </A1>
    
}
