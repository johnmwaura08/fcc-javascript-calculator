import React from 'react';
import Aux from '../../HOC/Aux';

import classes from './Layout.css'

export const Layout = (props) => {
    return (
        <Aux>

        <div>
           Toolbar, SideBar , Backdrop 
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
        </Aux>

    );
}
