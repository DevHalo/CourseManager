import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

import Titlebar from './components/Titlebar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import IO from './js/io';

const useStyles = makeStyles(theme => ({
    root: { padding: theme.spacing(3, 2) },
}));

export default function App() {
    const classes = useStyles();
    const [sideBar, setSidebar] = React.useState(false);

    const [userSettings, setUserSettings] = React.useState(null);

    const openSidebar = () => { setSidebar(true); };
    const closeSidebar = () => { setSidebar(false); };

    React.useEffect(() => {
        setUserSettings(IO.LoadUserData());
    }, []);

    return (
        <div className="container">
            <Titlebar openSidebar={openSidebar} university={userSettings} />
            <Sidebar closeSidebar={closeSidebar} show={sideBar} />
            <Paper className={classes.root}>
                <p>yo</p>
            </Paper>
            <Footer />
        </div>
    );
}
