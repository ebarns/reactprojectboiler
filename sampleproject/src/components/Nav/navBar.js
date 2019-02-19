import React, {Component} from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import './navBar.css';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "prints",
            isNavOpen: false,
        };
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav() {
        this.setState({
            isNavOpen: false
        });
    }

    tabIsActive(tab) {
        return tab === this.state.activeTab ? `active-${tab}` : "";
    }

    setActiveTab(tab) {
        this.setState({
            activeTab: tab
        });
    }

    render() {
        return <div>
            <MenuIcon className={"menu-icon"} onClick={() => this.setState({isNavOpen: true})}/>
            <Drawer open={this.state.isNavOpen} onClose={this.closeNav}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.closeNav}
                    onKeyDown={this.closeNav}
                >
                    <div className="main-nav">
                        <h1>Antonio Cardoso</h1>
                        <List>
                            <a href="#prints">
                                <ListItem button onClick={() => this.setActiveTab("prints")}
                                          className={`nav-item prints ${this.tabIsActive("prints")}`} key={"prints"}>
                                    <ListItemText primary={"Prints"}/>
                                </ListItem>
                            </a>
                            <a href="#sculpture">
                                <ListItem button onClick={() => this.setActiveTab("sculpture")}
                                          className={`nav-item sculpture ${this.tabIsActive("sculpture")}`}
                                          key={"Scupltures"}>
                                    <ListItemText primary={"Scupltures"}/>
                                </ListItem>
                            </a>
                            <a href="#about">
                                <ListItem button onClick={() => this.setActiveTab("about")}
                                          className={`nav-item about ${this.tabIsActive("about")}`} key={"about"}>
                                    <ListItemText primary={"About"}/>
                                </ListItem>
                            </a>
                        </List>
                    </div>
                </div>
            </Drawer>
        </div>
    }
}

export default NavBar;