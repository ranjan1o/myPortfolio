import styled from 'styled-components'

import mernstack from "../images/Education/mernstack.png"
import gimg from "../images/Education/dbatukLogo"
const QualificationCardStyled = styled.div`
border-left: 1px solid var(--border-color);
border-top:8px solid var(--border-color);
border-right:1px solid var(--border-color);
border-bottom:1px solid var(--border-color);

background-color:var( --background-dark-gray);
margin: 0 1rem;
transition : all .4s ease-in-out;
&:hover{
    border-top: 8px solid var(--primary-color);
    transform: translateY(-3px);
}
.container{
    padding: 1.2rem;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    height: 17rem;
    img{
        width: 7rem;
    }
    h4{
        font-size:0.9rem;
        text-align:center;
        margin-bottom:1rem;
            color: var(--white-color);
      
    }
    p:nth-child(3){
            font-size: 1rem;
    text-align: center;

    }
    p:nth-child(4){
     font-size: 0.8rem;
     text-align: center;
    }
}
`
export function Education() {
    return (
        <QualificationCardStyled>
            <div className="container">
                <img src={mernstack}alt="" />
                <h4>jajkjk</h4>
                <p>jjknkj</p>
                <p>hbjjbkj</p>
            </div>
        </QualificationCardStyled>
    )
}
