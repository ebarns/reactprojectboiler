import React, {Component} from "react";
import GridList from '@material-ui/core/GridList';
import Bullet from "../../imgs/bullet.jpg";
import "./about.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import StackGrid, { transitions } from 'react-stack-grid';

export default class About extends Component{
	

	createCard(text){
		return <div className="about-bullet">
						<img className="mustache-bullet" src={Bullet}/>
						<div className="bullet">{text}</div>
					</div>

	}
	render(){
		return (
			<div id="about" style={{height: "100vh"}}className="flex-div">
				<div>
					{this.createCard("Antonio Cardoso (b. 1994) grew up internationally in Indonesia and China and now lives in his native city of Sao Paulo, Brazil")}
					{this.createCard("He is a graduate of the Massachusetts College of Art and Design in Boston, Massachusetts, where he received his BFA in Printmaking with a minor in Sculpture in 2017.")}
					{this.createCard("Antonio has worked with several printmakers in the Boston area, including renowned artist Liz Shepherd and internationally acclaimed Master Printer Jim Strout.")}
					{this.createCard("Antonio was a recipient of the highly competitive George Nick Prize in 2D media in 2017.")}
				</div>
				<div className="footer">If you have questions, inquires about commissions, or any other comments <br/> contact <a>acardoso@alumni.massart.edu</a></div>
			</div>
		)
	}
}

class AboutTile extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return 	<div>
					<div className="about-ti">
						<img className="mustache-bullet" src={Bullet}/>
						<div>{this.props.text}</div>
					</div>
				</div>
	}
}