import "./Style.css"
import styled from "styled-components"
const ContactWrapper = styled.div`
margin-top: 100px;
.line{
width: 200px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);
}`
export function Contact() {
    return <ContactWrapper>
        <div>
            <h1>Contact Me</h1>
            <hr className="line"/>
            <div className="Contact">
                <div>
                    <h2>call</h2>
                    <p>+91-6232059639</p>
                </div>
                <div>
                    <h2>Email</h2>
                    <p>ranjan0r890@gmail.com</p>
                </div>
            </div>
        </div>
        </ContactWrapper>
}