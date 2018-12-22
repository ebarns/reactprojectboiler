import React, {Component} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
      this.setState(state => ({ open: !state.open }));
    };

  handleClose() {
      this.setState({ open: false });
  };

    render() {
      console.warn(this.state.open);
        return (
            <div style={styles.header} className={"header"}>
                  <AppBar color="default" position="static">
                    <Toolbar>
                     <MenuIcon onClick={this.handleToggle}/>
                      <Typography variant="h6" color="inherit" style={styles.grow}>
                        Antonio Cardoso
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Popper style={styles.popUp} open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList>
                              <MenuItem onClick={this.handleClose}>About</MenuItem>
                              <MenuItem onClick={this.handleClose}>3-D Work</MenuItem>
                              <MenuItem onClick={this.handleClose}>Print Work</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
            </div>
        );
    }
}
export default Header;

const styles = {
      popUp: {
        position: 'absolute',
        zIndex: 100,
      },
      grow: {
        flexGrow: 1,
        paddingLeft: '0.5rem'
      },
      header: {
        marginBottom: '1rem'
      }
    };