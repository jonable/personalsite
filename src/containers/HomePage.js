import React from 'react';
import { NavLink } from 'react-router-dom'

export default class HomePage extends React.Component{
    render(){
        return(
            <section className="page--section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">Jon
                    <span className="rainbow-text gradient2">Nable</span>
                    </h1>
                    <p className="lead mb-5">             
                        Northampton, MA<br />
                        Developer, Designer, Photographer and all around outdoor enthuasist. <br />
                        VP Shared Services at SER exposition services Worcester, MA.
                    <br />
                        <NavLink className="" to="/contact">Get in touch.</NavLink>     
                    </p>
                    <div className="social-icons">
                        <a href="https://www.github.com/jonable/" className="color-orange-link">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/jonnable/" className="color-orange-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.flickr.com/photos/jonable/" className="color-red-link">
                            <i className="fab fa-flickr"></i>
                        </a>                
                        <a href="https://twitter.com/jonable" className="color-purple-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/jonathan.nable" className="color-blue-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>                    
                </div>
            </section>
        )
    }
}