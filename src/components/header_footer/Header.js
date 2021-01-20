import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/icons/IconButton';

import SideDrawer from './SideDrawer';
import { render } from '@testing-library/react';
import { Restaurant } from '@material-ui/icons';


class Header extends Component {

    state = {
        drawerOpen:false,
        headerShow:false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0) {
        this.setState({
            headerShow: true
        }) 
    } else {
        this.setState({
            headerShow: false
        })
        }
    }

    toggleDrawer = (value) => {
        this.setState ({
            drawerOpen:value
        })
    }

    render(){
        Restaurant(
            <AppBar position = "fixed" style = {{
                backgroundColor:this.state.headerShow ? '#2f2f2f' :
                'transparent',
                boxShadow:'none',
                padding: '10px 0px'
            }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo+venue">Yankee Statium</div>
                        <div className="header+logo_title">Opening Day</div>
                    </div>

                    <IconButton 
                    arial-label ="Menu"
                    color="inherit"
                    onclick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={this.drawerOpen}
                        onclose={(value)=>this.toggleDrawer(value)}
                    />


                </Toolbar>
            </AppBar>
        );
    }
}









export default Header;