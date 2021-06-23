import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as navbar_selectors from '../store/navbar/reducers';
import * as navbar_types from '../store/navbar/action_types';
import * as navbar_actions from '../store/navbar/actions';

import NavBarMenu from '../components/NavBarMenu'

import NavBarItem from '../components/NavBarItem'

const NAV_LINKS = [
    {
        to: "/",
        title: "Home",
        extras: { exact: true }
    },
    {
        to: "/photography",
        title: "Photography",
        extras: {}
    },
    {
        to: "/design",
        title: "Design",
        extras: {}
    },
    {
        to: "/app-dev",
        title: "App. Development",
        extras: {}
    },
    {
        to: "/contact",
        title: "Contact",
        extras: {}
    },
]

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.nav_container_ref = React.createRef()
    } 
    toggleNavMenu(event) {
        this.props.dispatch(
            navbar_actions.toggleNavMenu(this.props.toggle_nav_menu)
        )
    }
    render(){
        return this.renderNavBarMenu()
    }
    renderNavBarMenu(){
        return (
            <NavBarMenu 
                nav_container_ref={this.nav_container_ref}
                toggleNavMenu={this.toggleNavMenu.bind(this)} 
                renderNavBarItem={this.renderNavBarItem.bind(this)}
                show_nav_menu={this.props.toggle_nav_menu === navbar_types.NAVBAR_MENU_OPEN ? true : false} 
                nav_links={NAV_LINKS}
            />
        )
    }
    renderNavBarItem(nav_link) {
        return (
            <NavBarItem
                key={nav_link.index}
                to={nav_link.to}
                toggleMobileMenu={nav_link.toggleMobileMenu}
                title={nav_link.title} 
                extras={nav_link.extras}
            />
        )
    }    
}

function mapStateToProps(state) {
    return {
        toggle_nav_menu: navbar_selectors.getMenuState(state),
    };
}

export default connect(mapStateToProps)(NavBar);