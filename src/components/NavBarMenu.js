import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class NavBarMenu extends Component {
    render() {
        const show_nav_menu = this.props.show_nav_menu ? "show" : ""
        return (
            
            <nav ref={this.props.nav_container_ref} 
                className={`navbar navbar-expand-lg navbar-dark bg-primary fixed-top ${show_nav_menu}`}        
                id="sideNav" 
                onClick={this.props.toggleNavMenu}
            >
                <a className="nav-open-btn d-none d-lg-block rainbow-background-4" to="">
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="" alt="" />
                    </span>
                </a>
                <NavLink className="navbar-brand" to="/">
                    <span className="d-block d-lg-none">JON
                        <span className="rainbow-text-1">NABLE</span>
                    </span>
                    <span className="d-none d-lg-block">
                    </span>
                </NavLink>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.props.toggleNavMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show_nav_menu}`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {this.props.nav_links.map((nav_link, index) => {
                            return this.props.renderNavBarItem({
                                ...nav_link,
                                index,
                                toggleMobileMenu: this.props.toggleMobileMenu
                            })
                        })}
                    </ul>
                </div>
            </nav>
        )
    }

}