import React from 'react';
import Titlebar from './components/Titlebar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default class App extends React.Component {
    constructor() {
        super();
        this.sideBar = React.createRef();
    }

    toggleSideBar() {
        this.sideBar.current.toggleDrawer("left", true);
    }

    render() {
        return (
            <div className="container">
                <Titlebar toggleSideBar={this.toggleSideBar} university={"York University"} />
                <Sidebar ref={this.sideBar} />
                <Footer />
            </div>
        );
    }
}
