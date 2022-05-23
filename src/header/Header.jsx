import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';





class Headercomponent extends Component {
    render() {
        return (
            <div className="navbar navbar-light bg-info customHeader">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">TaskBoard</span>
                </div>
                
            </div>
        );
    }
}
export default Headercomponent;