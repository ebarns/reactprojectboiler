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

const styles = theme => ({
    container: {
      display:"flex",
      justifyContent: "center"
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

    renderImageSeriesThumbnail(imgSrcList) {
        return (
          <Grid item key={imgSrcList[0]} xs={12} lg={4} md={6}>
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

    render() {
        const {classes} = this.props;
        return (
            <div id="prints" className={"main-container"}>
                <NavBar/>
                <div>
                  <div className={"image-grid"}>
                    <Grid container>
                        {images.map((imgSrc, index) => <Grid item key={index} sm={6} xs={12} lg={4} md={6}><GridListTile className={"image-tile"} >
                                <LazyLoad key={index} once>
                                    <img className="art-image full-width" src={imgSrc} onClick={() => {
                                        this.setState({activeImageSrcs: [imgSrc], isImageDialogActive: true})
                                    }}/>
                                </LazyLoad>
                            </GridListTile>

                      </Grid>
                        )}
                        {this.renderImageSeriesThumbnail(bookEndImageSrcs)}
                        {this.renderImageSeriesThumbnail(spoonImgSrcs)}
                        {this.renderImageSeriesThumbnail(bubbleBoysImgSrcs)}
                        {this.renderImageSeriesThumbnail(holdImgSrcs)}
                        {this.renderImageSeriesThumbnail(untitledImgSrcs)}
                        {this.renderImageSeriesThumbnail(tradicaoImgSrcs)}
                        {this.renderImageSeriesThumbnail(skinnyDippingImgSrcs)}
                        </Grid>
                        </div>
                    <About/>
                    <Dialog className="image-dialog" open={this.state.isImageDialogActive} onClose={() => {
                        this.setState({isImageDialogActive: false})
                    }}>
                        <Carousel showThumbs={false}>
                            {this.state.activeImageSrcs.map((imgSrc, index) => <img className="art-image full-width" key={index} src={imgSrc}/>)}
                        </Carousel>
                        {/*<img className="art-image full-width" src={this.state.activeImageSrc}/>*/}
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AlternateApp);

// getSize(filename){
//   if (filename.length > 0){
//     const fileNameInfo = filename.split(".");
//     const sizeInfo = fileNameInfo[fileNameInfo.length - 3];
//     const sizeReading = sizeInfo.slice(sizeInfo.length - 3);
//     if (sizeReading.slice(0,2) === "SZ"){
//       console.warn(sizeReading.slice(2));
//       return Number(sizeReading.slice(2));
//     }
//   }
//   return 1;
// }