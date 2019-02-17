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

const imageContext = require.context('./imgs/Prints', false, /\.(png|jpe?g)$/);
const images = imageContext.keys().map(imageContext);

const bookend = require.context('./imgs/Sculpture/BookEnd', false, /\.(png|jpe?g)$/);
const bookEndImageSrcs = bookend.keys().map(bookend);

const styles = theme => ({
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '2rem',
        maxWidth: '1200px',
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
            activeImageSrc: ""
        };
    }

    renderBookEnd() {
        return (
            <GridListTile className={"image-tile"} key={"book"}>
                <LazyLoad key={"bookend"} once>
                    <img alt="BookEnd" className="art-image full-width" src={bookEndImageSrcs[0]} onClick={() => {
                        this.setState({activeImageSrc: bookEndImageSrcs[0], isImageDialogActive: true})
                    }}/>
                </LazyLoad>
                <div className={this.props.classes.icon}>
                    0
                </div>
            </GridListTile>
        );
    }

    render() {
        console.log("%c RE-RENDERING MAIN", 'color : red; font-size: 2rem;')
        console.log(this.props);
        const {classes} = this.props;
        return (
            <div id="prints" className={"main-container"}>
                <NavBar/>
                <div className={classes.grid}>
                    <GridList style={{alignItems: "center"}} cols={2}>
                        {images.map((imgSrc, index) => <GridListTile className={"image-tile"} key={index}>
                                <LazyLoad key={index} once>
                                    <img className="art-image full-width" src={imgSrc} onClick={() => {
                                        this.setState({activeImageSrc: imgSrc, isImageDialogActive: true})
                                    }}/>
                                </LazyLoad>
                                <div className={classes.icon}>
                                    0
                                </div>
                            </GridListTile>
                        )}
                        {this.renderBookEnd()}
                    </GridList>
                    <About/>
                    <Dialog className="image-dialog" open={this.state.isImageDialogActive} onClose={() => {
                        this.setState({isImageDialogActive: false})
                    }}>
                        <Carousel showThumbs={false}>
                            {bookEndImageSrcs.map((imgSrc, index) => <LazyLoad key={index} once>
                                    <img className="art-image full-width" src={imgSrc} onClick={() => {
                                        this.setState({activeImageSrc: imgSrc, isImageDialogActive: true})
                                    }}/>
                                </LazyLoad>
                            )}
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