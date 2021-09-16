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
               <h1> Find Me On</h1>
<h3>Mail me at <span className="textc">ranjan0r890@gmail.com</span></h3>

                <p>Phone <span className="textc">+91 6232059639</span></p>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <GitHubIcon className="cicon"></GitHubIcon>
                    <LinkedInIcon className="cicon"/>
                </div>
                {/* <div>
                    <h2>call</h2>
                    <p>+91-6232059639</p>
                </div>
                <div>
                    <h2>Email</h2>
                    <p>ranjan0r890@gmail.com</p>
                </div> */}
            </div>
        </div>
        </ContactWrapper>
}