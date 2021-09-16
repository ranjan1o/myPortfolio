import "./Style.css"
import styled from "styled-components"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const ContactWrapper = styled.div`


margin-top: 100px;
.line{
width: 200px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);
}
.cicon{
    width:40px;
    height: 40px;
    margin: 5px 15px;
    color:#50bd88
}
.textc{
    color:#50bd88;
}`
export function Contact() {
    return <ContactWrapper>
        <div>
            <h1 className="textStyling">Contact Me</h1>
            <hr className="line"/>
            <div >
             
<h3>Mail me at <span className="textc">ranjan0r890@gmail.com</span></h3>

                <p>Phone <span className="textc">+91 6232059639</span></p>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"80px"}}>
                 <button style={{background:"none",border:"none"}}><a href="https://github.com/ranjan1o" target="_blank" rel="noreferrer"><GitHubIcon className="cicon"></GitHubIcon></a></button>
                  <button style={{background:"none",border:"none"}}> <a href="https://www.linkedin.com/in/ranjan-giri-0097521a7/" target="_blank" rel="noreferrer"> <LinkedInIcon className="cicon"/></a></button>
                </div>
             
            </div>
        </div>
        </ContactWrapper>
}