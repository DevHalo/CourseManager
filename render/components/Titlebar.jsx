import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MinimizeSharpIcon from '@material-ui/icons/MinimizeSharp';
import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

import IconButton from '@material-ui/core/IconButton';

const { remote } = require('electron');

const useStyles = makeStyles(theme => ({
    root: {
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#343d46',
        zIndex: 1000,
        'user-select': 'none',
        WebkitAppRegion: 'drag',
    },
    title: {
        float: 'left',
        textAlign: 'center',
        verticalAlign: 'middle',
        'user-select': 'none',
    },
    windowIcons: {
        float: 'right',
        WebkitAppRegion: 'no-drag',
    },
    btn: { size: 'small' },
    icon: { root: { color: theme.white } },
}));

const Titlebar = (props) => {
    const classes = useStyles();
    const [isMaximized, setMaximizeState] = React.useState(false);

    React.useEffect(() => {
        setMaximizeState(remote.getCurrentWindow().isMaximized());
    }, []);

    const onTitleClick = (func) => {
        switch (func) {
        case 'minimize':
            remote.getCurrentWindow().minimize(); break;
        case 'maximize':
            isMaximized ?
                remote.getCurrentWindow().unmaximize() : remote.getCurrentWindow().maximize();
            break;
        case 'close':
            remote.getCurrentWindow().close(); break;
        default:
            throw new Error('This can\'t happen');
        }

        setMaximizeState(remote.getCurrentWindow().isMaximized());
    };

    return (
        <div
            className={classes.root}
            onDoubleClick={() => onTitleClick('maximize')}
        >
            <Typography className={classes.title}> {props.programName} </Typography>
            <div className={classes.windowIcons}>
                <IconButton size="small" onClick={() => onTitleClick('minimize')}>
                    <MinimizeSharpIcon classes={{ root: classes.icon }} />
                </IconButton>
                <IconButton size="small" onClick={() => onTitleClick('maximize')}>
                    <CheckBoxOutlineBlankSharpIcon />
                </IconButton>
                <IconButton size="small" onClick={() => onTitleClick('close')}>
                    <CloseSharpIcon />
                </IconButton>
            </div>
        </div>
    );
};

Titlebar.propTypes = { programName: PropTypes.string };
Titlebar.defaultProps = { programName: 'Course Manager' };

export default Titlebar;
