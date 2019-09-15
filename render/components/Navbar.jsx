import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(2) },
    title: {
        flexGrow: 1,
        'user-select': 'none',
    },
}));

const Navbar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={props.openSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                    > {props.university} </Typography>
                    <Button color="inherit">Settings</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Navbar.propTypes = {
    university: PropTypes.string,
    openSidebar: PropTypes.func.isRequired,
};

Navbar.defaultProps = { university: 'No University' };

export default Navbar;
