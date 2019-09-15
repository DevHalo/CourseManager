import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Titlebar from './components/Titlebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import IO from './js/io';

const useStyles = makeStyles(() => ({
    content: { border: '20px' },
}));

export default function App() {
    const classes = useStyles();
    const [sideBar, setSidebar] = React.useState(false);

    const [userSettings, setUserSettings] = React.useState(null);

    // Open/Close side bar
    const openSidebar = () => { setSidebar(true); };
    const closeSidebar = () => { setSidebar(false); };

    // Load in user settings with electron-store
    React.useEffect(() => {
        setUserSettings(IO.LoadUserData());
    }, []);

    return (
        <div>
            <Titlebar />
            <Navbar
                openSidebar={openSidebar}
                university={userSettings ? userSettings.get('university') : 'Loading...'}
            />
            <Sidebar closeSidebar={closeSidebar} show={sideBar} />
            <div className={classes.content}>
                <Paper>
                    <p>Content</p>
                    <p>More Content</p>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
