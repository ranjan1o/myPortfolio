import "./Style.css"
import styled from "styled-components"
import { useState } from "react"
import emailjs from "emailjs-com"
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
    const [data, setData] = useState({})
    const handlechane = (e) => {
       const {name, value} = e.target
    setData( { ...data, [name]: value} )
    }
    const handleemail = (e) => {
        console.log("hi")
        e.preventDefault();
        emailjs.sendForm('service_0ruqom6', 'template_eozjtuu', e.target, 'user_Pla7Jv5GmTexNGVEZ9OoQ')
            .then(res=> {
        console.log("done")
            })
            .catch(err => {
            console.log(err)
            })
        console.log("sjkdkj")
    }
    return <FormWrapper>
        <div >
            <h1>Contact Form</h1>
            <hr className="line"></hr>
            <div>
                <form onSubmit={handleemail}>
                <h2>Name</h2>
                <input name="name" className="inputSection bbnone BottomBorder"placeholder="Name" onChange={handlechane} type="text" />
                <h2>Email</h2>
                <input name="Email"  className="inputSection bbnone BottomBorder" placeholder="Email" onChange={handlechane} type="Email" />
                <h3>Company</h3>
                <input name="cpname" className="inputSection bbnone BottomBorder" placeholder="Company Name" onChange={handlechane} type="text" />
                <h2>Message</h2>
                <textarea name="message" className="inputSection bbnone BottomBorder textarea"  id="" cols="30" rows="10 " onChange={handlechane}></textarea>
                <br></br><input className="inputSection1" type="submit"/>
                
                </form>
                <p>Innovating one project at a time</p>
            </div>
        </div>
    </FormWrapper>
}