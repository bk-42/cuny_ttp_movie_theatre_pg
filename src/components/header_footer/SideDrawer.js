import React from 'react'
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDawer = (props)=> {

    const scrollToElement = (element)=> {
        scrollToElement(element, {
            duration:1500,
            delay: 100,
            smooth:true,
            offset:-150
        });
        props.onCooncole(false)
    };

    return(
        <Drawer 
            anchor="right" 
            open= {props.open}
            onClose={()=> props.onClose(false)}>

                <ListItem button onClick={() => scrollToElement
                ('featured')}>
                    Event starts in
                </ListItem>

                <ListItem button onClick = {() => scrollToElement
                    ('venuenfo')}>
                    Venue NFO
                </ListItem>

                <ListItem button onClick={() => scrollToElement
                 <'highlights'}>
                     Highlights
                 </ListItem>

                 <ListItem button onClick={() => scrollToElement
                 <'pricing'}>
                     Pricing
                 </ListItem>

                 <ListItem button onClick={() => scrollToElement
                 <'location'}>
                     Location
                 </ListItem>
        </Drawer>
    );
};

export default SideDrawer;