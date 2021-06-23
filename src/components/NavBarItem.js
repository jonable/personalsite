import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class NavBarItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <NavLink 
                    className="nav-link rainbow-text-link" 
                    activeClassName="rainbow-text-link-active" 
                    to={this.props.to} 
                    onClick={this.props.toggleMobileMenu}
                    {...this.props.extras}>                    
                    {this.props.title}
                </NavLink>
            </li>
        )
    }
}