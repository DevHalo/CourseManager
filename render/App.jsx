import React from 'react';
import Titlebar from './components/Titlebar';
import Footer from './components/Footer';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Titlebar />
                <Footer />
            </div>
        );
    }
}
