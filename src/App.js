import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './containers/NavBar'
import HomePage from './containers/HomePage'
import PhotogCategories from './containers/PhotogCategories'
import PhotogGallery from './containers/PhotogGallery'
import AppDevPage from './containers/AppDevPage'
import ContactPage from './containers/ContactPage'

class FillerPage extends Component {
  render(){
    return (<div>
      <section className="page--section p-3 p-lg-5 d-flex flex-column">
        <h2 className="mb-5">{this.props.children}</h2>
        <div className="subheading mb-5">
          <p>More info to come! </p>
        </div>
      </section>
    </div>)
  }
}


class App extends Component {
  render() {
    return (      
      <BrowserRouter>
      <div className="h-100">
        <NavBar />
        <div className="container-fluid p-0 h-100">
            <Route exact path="/" component={HomePage} /> 
            <Switch>
                <Route path={"/photography/:category/:id?"} component={PhotogGallery} />                 
                <Route path="/photography/" component={PhotogCategories} />                
            </Switch>           
            <Route path="/design" component={props => <FillerPage>Design</FillerPage>} />
            <Route path="/app-dev" component={AppDevPage} />
            <Route path="/about" component={props => <FillerPage>About</FillerPage>} />
            <Route path="/contact" component={ContactPage} />
        </div>
      </div>     
      </BrowserRouter> 
    )
  }
}

export default App;
