import React, {Component} from 'react';
import './App.css';
import Header from "./header.js";
import listReactFiles from 'list-react-files'
import GridList from '@material-ui/core/GridList';
import LazyLoad from 'react-lazyload';
import GridListTile from '@material-ui/core/GridListTile';
class AlternateApp extends Component {
     importAll(r) {
      return r.keys().map(r);
    }

    render() {
        console.log("%c RE-RENDERING MAIN", 'color : red; font-size: 2rem;')
        const images = this.importAll(require.context('./img', false, /\.(png|jpe?g)$/));
        return (
            <div className={"main-container"}>
                  <Header/>
                  <div>
                  <GridList>
                  {images.map((imgSrc,index) => 
                    <GridListTile className="img-tile" key={index} cols={2}>
                        <LazyLoad height={450} offset={100} once>
                            <img className="art-image" src={imgSrc}/>
                        </LazyLoad>
                    </GridListTile>)}
                  </GridList>
                    </div>
            </div>
        );
    }
}
export default AlternateApp;
