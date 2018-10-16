import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";

class App extends Component {

    state = {};

    componentDidMount() {
        setInterval(this.hello, 250);
    }

    hello = () => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <nav className="navbar navbar-default navbar-sidebar bootsnav no-full">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" aria-expanded="true">
                                    <span className="fa fa-bars"></span>
                                </button>
                                <NavLink to="/" className="navbar-brand"><span className="fa fa-home"></span> Index</NavLink>
                            </div>
                                
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">Étudiant</a>
                                        <ul className="dropdown-menu">
                                           <li>
                                                <NavLink to="/">TODO</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">Chercheur de stagiaire</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/">TODO</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">Coordonateur de stage</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/">TODO</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">Superviseur de stage</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/">TODO</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">Moniteur de stage</a>                                            <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/">TODO</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">Administrateur</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/">TODO</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">
                                            <span className="fa fa-user-circle"></span> 
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/">TODO</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul >
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/stuff">Stuff</NavLink>
                            </li>                                
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li> 
                                <NavLink to="/offers">Offers</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="pageheader">
                        <div className="container">
                            <h2 className="title">Cégep André-Laurendeau</h2>
                            <p>Projet AL : Stage ATE</p>
                        </div>
                    </div>
                    {/*<header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">{this.state.message}</h1>
                    </header>*/}
	                <section className="container">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/offers" component={Offers}/>
                    </section>
                </div>
            </HashRouter>
        );
    }
}

export default App;
