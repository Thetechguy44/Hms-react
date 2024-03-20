import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-area">
            <div className="header-top second-header d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 d-none d-lg-block"></div>
                        <div className="col-lg-4 col-md-8 d-none  d-md-block">
                            <div className="header-cta">
                                <ul>
                                    <li>
                                        <i className="icon dripicons-mail" />
                                        <span>info@example.com</span>
                                    </li>
                                    <li>
                                        <i className="icon dripicons-phone" />
                                        <span>+8 12 3456897</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-3 d-none d-lg-block">
                            <div className="header-social text-right">
                                <span>
                                    <a href="#" title="Facebook">
                                        <i className="fab fa-facebook" />
                                    </a>
                                    <a href="#" title="Twitter">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#" title="LinkedIn">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </span>
                                {/*  /social media icon redux */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className="menu-area">
                <div className="container">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="main-menu text-right pr-15">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-sub">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li className="has-sub">
                                                <Link to="/services">Services</Link>
                                                <ul>
                                                    <li>
                                                    <Link to="/services">Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service_details">Services Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-sub">
                                            <Link to="/departments">Departments</Link>
                                                <ul>
                                                    <li>
                                                    <Link to="/departments">Departments</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/department_details">Departments Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                                <a href="contact.html" className="top-btn">
                                    Get A Quote <i className="fas fa-chevron-right" />
                                </a>
                            </div>
                            <div className="col-12">
                                <div className="mobile-menu" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;