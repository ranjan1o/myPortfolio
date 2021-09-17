
import styled from "styled-components"

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const A = styled.div`

padding-top:20px;
width: 100%;
display: flex;

font-size: x-large;


.bbnone{
  border: none;
  background-color: transparent;
  font-size: 25px;
  color: white;
  margin-left: 10px;
  :hover{
    background-color:#ff00ff ;
    
}
}
.iconheader{
  font-size: 30px;
  color: white;


}
.colorp{
  width: 30px;
  color: #ff00ff;
  float: left;
  padding-top: 0px;
  margin-left: 10px;
  background-color:darkblue;
  font-size: xx-large;
 font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@media screen and (max-width:600px) {
 .navres{
   display: none;
  
 }
}
.ict{
  margin: 2px 3px;
  justify-content: center;
  padding:2px 2px 0px 2px;
}

.ghy{
  width:80px;
}
`
export function Navbar() {
  return <A>
      <div style={{width:"100%"}}>
      <div className="flex ghy">
        <div className="colorp">R</div>
      </div>
      <div>
      <div style={{float:"right",display:"flex"}}>
        <div className="flex bordernone navres" ><button className="bbnone textStyling" onClick={() => window.scrollTo(0, 1800)}> Project</button>
          <button className="bbnone textStyling" onClick={() => window.scrollTo(0, 750)}>Skill</button>
          <button className="bbnone textStyling" onClick={() => window.scrollTo(0, 300)}> About</button>
        <button className="bbnone textStyling" onClick={() => window.scrollTo(0, 2700)}>Contact</button>
          </div>
          <div>
        <button className="bbnone"><a href="https://github.com/ranjan1o" target="_blank" rel="noreferrer"><GitHubIcon className="iconheader"/></a></button>
          <button className="bbnone"><a href="https://www.linkedin.com/in/ranjan-giri-0097521a7/" target="_blank" rel="noreferrer"><LinkedInIcon className="iconheader"/></a></button>
          <button className="bbnone"><TwitterIcon className="iconheader"/></button>
          </div>
        </div>
        </div>
      </div>
   
        </A>
}
