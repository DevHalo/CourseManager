import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles({
    list: { width: 250 },
    fullList: { width: 'auto' },
    root: { '& .MuiBackdrop-root': { top: '24px' } },
    paper: {
        height: 'calc(100% - 24px)',
        top: '24px',
    },
});

const Sidebar = (props) => {
    const classes = useStyles();
    const sideBarIcons = [
        { name: 'Home', icon: <HomeIcon /> },
        { name: 'My Profile', icon: <AccountBoxIcon /> },
        { name: 'Courses', icon: <LocalLibraryIcon /> },
        { name: 'Degree', icon: <SchoolIcon /> },
    ];

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={props.closeSidebar}
            onKeyDown={props.closeSidebar}
        >
            <List>
                {sideBarIcons.map(option => (
                    <ListItem button key={option.name}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <ListItemText primary={option.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Drawer
            classes={{ root: classes.root, paper: classes.paper }}
            open={props.show}
            onClose={props.closeSidebar}
        >
            {sideList()}
        </Drawer>
    );
};

Sidebar.propTypes = {
    show: PropTypes.bool.isRequired,
    closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
