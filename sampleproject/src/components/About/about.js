import React, {Component} from "react";
import Bullet from "../../imgs/bullet.jpg";
import "./about.css";

export default class About extends Component {
    render() {
        return (
            <div id="about" style={{height: "100vh"}} className="flex-div">
                <div>
                    <AboutTile
                        text="Antonio Cardoso (b. 1994) grew up internationally in Indonesia and China and now lives in his native city of Sao Paulo, Brazil"/>
                    <AboutTile
                        text="He is a graduate of the Massachusetts College of Art and Design in Boston, Massachusetts, where he received his BFA in Printmaking with a minor in Sculpture in 2017."/>
                    <AboutTile
                        text="Antonio has worked with several printmakers in the Boston area, including renowned artist Liz Shepherd and internationally acclaimed Master Printer Jim Strout."/>
                    <AboutTile
                        text="Antonio was a recipient of the highly competitive George Nick Prize in 2D media in 2017."/>
                </div>
                <div className="footer">If you have questions, inquires about commissions, or any other
                    comments <br/> contact <a>acardoso@alumni.massart.edu</a></div>
            </div>
        )
    }
}

export const AboutTile = ({text}) => {
    return <div className="about-bullet">
        <img alt="-" className="mustache-bullet" src={Bullet}/>
        <div className="bullet">{text}</div>
    </div>
};