import React, {Component} from 'react';
import './App.css';
import LazyLoad from 'react-lazyload';
import Dialog from "@material-ui/core/Dialog";
import About from "./components/About/about.js";
import NavBar from "./components/Nav/navBar";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {withStyles} from '@material-ui/core/styles';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from '@material-ui/core/Grid';

const imageContext = require.context('./imgs/Prints', false, /\.(png|jpe?g)$/);
const images = imageContext.keys().map(imageContext);

const bookend = require.context('./imgs/Sculpture/BookEnd', false, /\.(png|jpe?g)$/);
const bookEndImageSrcs = bookend.keys().map(bookend);

const spoon = require.context('./imgs/Sculpture/Spoon', false, /\.(png|jpe?g)$/);
const spoonImgSrcs = spoon.keys().map(spoon);

const hold = require.context('./imgs/Sculpture/holdIt', false, /\.(png|jpe?g)$/);
const holdImgSrcs = hold.keys().map(hold);

const tradicao = require.context('./imgs/Sculpture/tradicao', false, /\.(png|jpe?g)$/);
const tradicaoImgSrcs = tradicao.keys().map(tradicao);


const skinnyDipping = require.context('./imgs/Sculpture/skinnyDipping', false, /\.(png|jpe?g)$/);
const skinnyDippingImgSrcs = skinnyDipping.keys().map(skinnyDipping);

const bubbleBoys = require.context('./imgs/Sculpture/bubbleBoys', false, /\.(png|jpe?g)$/);
const bubbleBoysImgSrcs = bubbleBoys.keys().map(bubbleBoys);

const untitled = require.context('./imgs/Sculpture/untitled', false, /\.(png|jpe?g)$/);
const untitledImgSrcs = untitled.keys().map(untitled);

const bookEnd = require.context('./imgs/Sculpture/BookEnd', false, /\.(png|jpe?g)$/);
const bookEndImgSrcs = bookEnd.keys().map(bookEnd);

const gig = require.context('./imgs/Prints/gig', false, /\.(png|jpe?g)$/);
const gigImgSrcs = gig.keys().map(gig);


const chinesenewyear = require.context('./imgs/Prints/chinesenewyear', false, /\.(png|jpe?g)$/);
const chinesenewyearImgSrcs = chinesenewyear.keys().map(chinesenewyear);

const islands = require.context('./imgs/Prints/islands', false, /\.(png|jpe?g)$/);
const islandsImgSrcs = islands.keys().map(islands);

const lemanja = require.context('./imgs/Prints/lemanja', false, /\.(png|jpe?g)$/);
const lemanjaImgSrcs = lemanja.keys().map(lemanja);

const workhardplayhard = require.context('./imgs/Prints/workhardplayhard', false, /\.(png|jpe?g)$/);
const workhardplayhardImgSrcs = workhardplayhard.keys().map(workhardplayhard);

const boredTeen = require.context('./imgs/Prints/boredteen', false, /\.(png|jpe?g)$/);
const boredTeenImgSrcs = boredTeen.keys().map(boredTeen);

import voltando from "./imgs/Prints/VoltandoPraCasaSZ.jpg"
import fourth from "./imgs/Prints/4. 4th of JulySZ2.jpg";
import Carnaval from "./imgs/Prints/CarnavalSZ2.jpg";
import BrainerdRoad from "./imgs/Prints/BrainerdRoad.jpg";
import AnoNovo from "./imgs/Prints/AnoNovo.jpg";
import ComoUmaOndaNoMar from "./imgs/Prints/ComoUmaOndaNoMar.jpg";
import Hazy from "./imgs/Prints/Hazy.jpg";
import Ops from "./imgs/Prints/Ops.jpg";
import Scars from "./imgs/Prints/Scars.jpg";
import TrespassersOnly from "./imgs/Prints/TrespassersOnly.jpg";
import BoozyBlueprint from "./imgs/Prints/BoozyBlueprint.jpg";
import MojitosandCabins from "./imgs/Prints/MojitosandCabins.jpg";
import AHotDay from "./imgs/Prints/AHotDay.jpg";
import BubbleBath from "./imgs/Prints/BubbleBath.jpg";
import CelebracaoSolo from "./imgs/Prints/CelebracaoSolo.jpg";
import untitledPrint from "./imgs/Prints/1C. UntitledSZ2.jpg";

const aboutContext = require.context('./imgs/About', false, /\.(png|JPE?G)$/);
const aboutImages = aboutContext.keys().map(aboutContext);

const imageData = [
    [voltando],
    gigImgSrcs,
    chinesenewyearImgSrcs,
    [fourth],
    [Carnaval],
    [BrainerdRoad],
    [AnoNovo],
    [ComoUmaOndaNoMar],
    boredTeenImgSrcs,
    islandsImgSrcs,
    [untitledPrint],
    [Hazy],
    [Ops],
    [Scars],
    lemanjaImgSrcs,
    [TrespassersOnly],
    workhardplayhardImgSrcs,
    [BoozyBlueprint],
    [MojitosandCabins],
    [AHotDay],
    [BubbleBath],
    bookEndImageSrcs,
    tradicaoImgSrcs,
    untitledImgSrcs,
    skinnyDippingImgSrcs,
    bubbleBoysImgSrcs,
    holdImgSrcs,
    [CelebracaoSolo],
    spoonImgSrcs,
];

const styles = theme => ({
    container: {
        display: "flex",
        justifyContent: "center"
    },
    carouselItem: {
        margin: "auto",
        padding: "0.5rem"
    },
    icon: {
        position: 'absolute',
        top: '2%',
        left: ' calc(100% - 1.8rem)',
        padding: '0',
        backgroundColor: "rgba(0,0,0,0.6)",
        color: 'white',
        width: "1.8rem",
        height: '1.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "50%"
    },
    root: {
        display: 'flex',
        height: 'fit-content'
    }
});

class AlternateApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isImageDialogActive: false,
            activeImageSrc: "",
            activeImageSrcs: [],
        };
    }

    renderImageSeriesThumbnail(imgSrcList, isBeginning = false, isFullWidth = false) {
        return (
            <Grid item id={isBeginning ? "sculpture" : ""} className={this.props.classes.carouselItem}
                  key={imgSrcList[0]} xs={12} sm={isFullWidth ? 12 : 6} lg={isFullWidth ? 8 : 4}
                  md={isFullWidth ? 12 : 6}>
                <GridListTile className={"image-tile"}>
                    <LazyLoad once>
                        <img alt="BookEnd" className="art-image full-width" src={imgSrcList[0]} onClick={() => {
                            this.setState({activeImageSrcs: imgSrcList, isImageDialogActive: true})
                        }}/>
                    </LazyLoad>
                    <div className={this.props.classes.icon}>
                        {imgSrcList.length}
                    </div>
                </GridListTile>
            </Grid>
        );
    }

    isFullScreen(srcs, index, size, isLarge = false) {
        return (index === srcs.length - 6 || (index === (srcs.length - 1))) ? (isLarge ? 8 : 12) : size
    }

    render() {
        console.warn(aboutImages);
        return (
            <div id="prints" className={"main-container"}>
                <NavBar/>
                <div>
                    <div className={"image-grid"}>
                        <Grid container>
                            {imageData.map((imgSrc, index) => this.renderImageSeriesThumbnail(imgSrc, index === 21))}
                        </Grid>
                    </div>
                    <About aboutImages={<Carousel className={"about-carousel"} showThumbs={false}>
                        {aboutImages.map((imgSrc, index) => <Grid item key={index} lg={8}><img
                            className="art-image full-width" key={index} src={imgSrc}/></Grid>)}
                    </Carousel>}/>
                    <Dialog className="image-dialog" open={this.state.isImageDialogActive} onClose={() => {
                        this.setState({isImageDialogActive: false})
                    }}>
                        <Carousel showThumbs={false}>
                            {this.state.activeImageSrcs.map((imgSrc, index) => <Grid item key={index} lg={12}><img
                                className="art-image full-width" key={index} src={imgSrc}/></Grid>)}
                        </Carousel>
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AlternateApp);