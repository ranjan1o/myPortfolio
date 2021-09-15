
import styled from "styled-components"

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const A = styled.div`
padding-top:20px;
width: 100%;
display: grid;
grid-template-columns: 10% 70% 20%;
text-align: center;
font-size: x-large;


.bbnone{
  border: none;
  background-color: transparent;
  font-size: 25px;
  color: white;
}
.iconheader{
  font-size: 30px;
  color: white;


}
.colorp{
  color: #ff00ff;
}
@media screen and (max-width:600px) {
 .navres{
   display: none;
 }
}

`
export function Navbar() {
    return <A>
      <div className="flex">
        <div className="colorp textStyling">Ranjan Giri</div>
      </div>
      <div className="navres">
        <div className="flex bordernone"><button className="bbnone textStyling" onClick={() => window.scrollTo(0, 500)}>Project</button>
          <button className="bbnone textStyling" onClick={() => window.scrollTo(0, 1200)}>Skill</button>
          <button className="bbnone textStyling" onClick={() => window.scrollTo(0, 1600)}> About</button>
        <button className="bbnone textStyling" onClick={() => window.scrollTo(0, 2000)}>Contact</button></div>
      </div>
      <div className="flex">
        <div className="">
        <button className="bbnone"><a href="https://github.com/ranjan1o" target="_blank" rel="noreferrer"><GitHubIcon className="iconheader"/></a></button>
          <button className="bbnone"><a href="https://www.linkedin.com/in/ranjan-giri-0097521a7/" target="_blank" rel="noreferrer"><LinkedInIcon className="iconheader"/></a></button>
          <button className="bbnone"><TwitterIcon className="iconheader"/></button>
        </div></div>
   
        </A>
}
