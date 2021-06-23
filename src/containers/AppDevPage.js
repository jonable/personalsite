import React from 'react';


export default class AppDevPage extends React.PureComponent {
    render() {
        return (
            <section className="page--section p-3 p-lg-3 d-flex flex-column" id="app-development">
                <h2 className="pl-4">Application Development</h2>
                <div className="subheading pl-4">Full Stack Development: Web, Mobile, Desktop, Server</div>                
                <div className="d-flex row  m-2">
                    <div className="col-sm-10 col-md-10 col-lg-10 my-2">
                        <ul className="listing">
                            <h3 className="rainbow-text-2">{" "}Javascript</h3>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>
                            {/* <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>
                            <h3 className="rainbow-text-2">{" "}Python</h3>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>                            
                            <h3 className="rainbow-text-2">{" "}Server</h3>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>
                            <li>Jonable.com Built with React <span><i className="fab fa-react"></i></span></li>                                                         */}
                        </ul>
                    </div>
                </div>               
            </section>
        )
    }
}