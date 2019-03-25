import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CurrentRates from './components/CurrentRates';
import HistoricalRates from './components/HistoricalRates';
import Home from './components/Home';
import Footer from'./components/Footer';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Euro Currency Rates</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <li><Link to={'/current-rates'} className="nav-link">Current Rates</Link></li>
                                <li><Link to={'/historical-rates'} className="nav-link">Historical Rates</Link></li>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/current-rates' component={CurrentRates}/>
                        <Route path='/historical-rates' component={HistoricalRates}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>

        );
    }
}
export default hot(App);

