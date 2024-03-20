import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-bg footer-p">
            <div className="overly">
                <img src="assets/img/an-bg/footer-bg.png" alt="rest" />
            </div>
            <div className="footer-top pb-30" style={{ backgroundColor: "#ECF1FA" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="flog mb-35">
                                    <a href="#">
                                        <img src="assets/img/logo/logo.png" alt="logo" />
                                    </a>
                                </div>
                                <div className="footer-text mb-20">
                                    <p>
                                        Sed ut perspiciatis unde om is nerror sit voluptatem accustium
                                        dolorem tium totam rem aperam eaque ipsa quae ab illose inntore
                                        veritatis
                                    </p>
                                </div>
                                <div className="footer-social">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-google-plus-g" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h5>Our Links</h5>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-chevron-right" /> Partners
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-chevron-right" /> About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-chevron-right" /> Career
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-chevron-right" /> Reviews
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-chevron-right" /> Terms &amp;
                                                Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-chevron-right" /> Help
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h5>Other Links</h5>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <i className="fas fa-chevron-right" /> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about">
                                                <i className="fas fa-chevron-right" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services">
                                                <i className="fas fa-chevron-right" /> Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/departments">
                                                <i className="fas fa-chevron-right" /> Department
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                <i className="fas fa-chevron-right" /> Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h5>Contact Us</h5>
                                </div>
                                <div className="footer-link">
                                    <div className="f-contact">
                                        <ul>
                                            <li>
                                                <i className="icon dripicons-phone" />
                                                <span>
                                                    1800-121-3637
                                                    <br />
                                                    +91 555 234-8765
                                                </span>
                                            </li>
                                            <li>
                                                <i className="icon dripicons-mail" />
                                                <span>
                                                    <a href="mailto:info@example.com">info@example.com</a>
                                                    <br />
                                                    <a href="mailto:sale@example.com">sale@example.com</a>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="fal fa-map-marker-alt" />
                                                <span>
                                                    380 St Kilda Road, Melbourne
                                                    <br />
                                                    VIC 3004, Australia
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-text text-center">
                                <p>© 2020 Mecare All design Zcube.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;