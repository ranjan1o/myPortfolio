import "./Style.css"
import styled from "styled-components"
const FormWrapper = styled.div`
margin-top: 100px;
.line{
width: 300px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);
}
.textarea{

    width:300px;
    height: 200px;
    border: 1px solid #2ca6c8;
}
`
export function ContactForm() {
    return <FormWrapper>
        <div >
            <h1>Contact Form</h1>
            <hr className="line"></hr>
            <div>
                <h2>Name</h2>
                <input className="inputSection bbnone BottomBorder"placeholder="Name" type="text" />
                <h2>Email</h2>
                <input  className="inputSection bbnone BottomBorder" placeholder="Email" type="Email" />
                <h3>Company</h3>
                <input  className="inputSection bbnone BottomBorder" placeholder="Company Name" type="text" />
                <h2>Message</h2>
                <textarea className="inputSection bbnone BottomBorder textarea" name="" id="" cols="30" rows="10"></textarea>
                <br></br><button className="inputSection1">Submit</button>
                <p>Innovating one project at a time</p>
            </div>
        </div>
    </FormWrapper>
}