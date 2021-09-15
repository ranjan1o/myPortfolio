import "./Style.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import impact1 from "../images/impact1.png"
import impact2 from "../images/impact2.png"
import impact3 from "../images/impact3.png"
import impact4 from "../images/impact4.png"
import pricelin1 from "../images/pricelin1.png"
import pricelin2 from "../images/pricelin2.png"
import pricelin3 from "../images/pricelin3.png"
import pricelin4 from "../images/pricelin4.png"
import html5 from "../images/skill/html5.png"
import materialui from "../images/skill/materialui.png"
import js from "../images/skill/JS.png"
import lenscart1 from "../images/lenscart1.png"
import lenscart2 from "../images/lenscart2.png"
import lenscart3 from "../images/lenscart3.png"
import lenscart4 from "../images/lenscart4.png"
import lenscart5 from "../images/lenscart5.png"
import lenscart6 from "../images/lenscart6.png"
import lenscart7 from "../images/lenscart7.png"
import lenscart8 from "../images/lenscart8.png"
import lenscart9 from "../images/lenscart9.png"

import redux from "../images/skill/redux.png"

import css from "../images/skill/css.png"
import react from "../images/skill/react.png"

import styled from "styled-components";
const PWrapper = styled.div`
margin-top: 100px;
box-shadow: whitesmoke;
.pcontaner{
width: 100%;
display:flex;
 flex-wrap: wrap;
  flex-flow: wrap;
  margin: auto;

}
.line{
width: 150px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);
}
.hcolor{
  color: #9cc9e3;
}
.tcolor{
  color:#bf4e4e;
}
.btnp{
  margin-top: 10px;
color:whitesmoke;
padding: 10px;
 background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);

}
/* @media screen and (max-width: 600px) {
  .pcontaner{
width: 80%;
display:grid;
margin: auto;
grid-template-columns:1fr
} 
}*/`
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const gitLink=["https://github.com/Abhi15git/LensKart","https://github.com/Ransingh88/project-impact_guru","https://github.com/devSudhir/Priceline-Clone"]
const ProjectName = ["Lenscacrt", "impactguru", "priceline"]
const images = [[lenscart1,lenscart2,lenscart3,lenscart4,lenscart5,lenscart6,lenscart7,lenscart8,lenscart9], [impact1, impact2, impact3, impact4], [pricelin1, pricelin2, pricelin3, pricelin4]]
const techstack = [[html5,css,js],[react,redux,js],[materialui,react,js]]
  const des = [" Lenskart is one of the e-commerce companies that operate in both online and offline distribution channels. Customers can order their products It deals in sunglasses,eyeglasses and contact lenses.,", "Impact Guru is a donation based crowdfunding platform that offers global crowdfunding solutions for NGOs, social enterprises. It was launched by Maneka Gandhi, Union Cabinet Minister for Women & Child Development", "Priceline.com is an online travel agency for finding discount rates for travel -related purchases such as airline tickets and hotel stays. The company facilitates the provision of travel services from its suppliers to its clients."]
export function Project() {
    return <PWrapper>
        <h1 className="textStyling">Projects</h1>
        <hr className="line"/>
        <div className="pcontaner">
        {ProjectName.map((e, i)=>{
            return <>
            <div key="e" className="projrctContainer">
                <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2000} autoPlay={true}>
                    <div> <img className="pimage" src={images[i][0]} alt="" />
                    </div>
                    <div> <img className="pimage" src={images[i][1]} alt=""/> </div>
                    <div> <img className="pimage" src={images[i][2]} alt=""/>              </div>
                    <div> <img className="pimage" src={images[i][3]} alt=""/>           </div>
                </Carousel>;
            
                <div className="">
                  <h1 className="hcolor">{ProjectName[i]}</h1>
                  <p className="desc">{des[i] }</p>
              </div>
                <div>
                    <p className="tcolor">Tech Stack</p>
                    <div className="tewchstack">
                    {techstack[i].map((a)=>{
                      return <img key={`${ProjectName[i]+i}`} className="techicon" src={a} alt="" />
                    } )}</div>
                </div>
                <div>
                    <button className="btnp"><a href={gitLink[i]} target="_blank" rel="noreferrer">Code</a></button>

                </div>
                </div>
                </>
        })}
            </div>
        </PWrapper>
}
