import Breadcrumb from "../components/Breadcrumb";

const About = () => {
    return (
        <main>
            <Breadcrumb title="About Us" name="News"/>
            {/* about-area */}
            <section
                id="about"
                className="about-area about-p mt-100 pb-80 p-relative"
                style={{
                    backgroundImage: "url(assets/img/an-bg/an-bg03.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="s-about-img p-relative">
                                <img src="assets/img/bg/illlustration.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content s-about-content pl-30">
                                <div className="section-title mb-20">
                                    <span>About Us</span>
                                    <h2>We Are Specialize in Medical Diagnositics</h2>
                                </div>
                                <p>
                                    Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate.
                                    Phasellus et ante ultrices, sagittis purus vitae, sagittis quam.
                                    Quisque urna lectus, auctor quis tristique tincidunt, semper vel
                                    lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec
                                    tellus in, laoreet commodo ipsum.
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-chevron-right" />
                                        </div>
                                        <div className="text">
                                            Pellentesque placerat, nisi congue vehicula efficitur.
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-chevron-right" />
                                        </div>
                                        <div className="text">
                                            Pellentesque placerat, nisi congue vehicula efficitur.
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-chevron-right" />
                                        </div>
                                        <div className="text">
                                            Phasellus mattis vitae magna in suscipit. Nam tristique
                                            posuere sem, mattis molestie est bibendum.
                                        </div>
                                    </li>
                                    <div />
                                </ul>
                                <div className="slider-btn mt-30">
                                    <a
                                        href="#"
                                        className="btn ss-btn"
                                        data-animation="fadeInRight"
                                        data-delay=".8s"
                                    >
                                        Read More <i className="fas fa-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about-area-end */}
            {/* counter-area */}
            <div
                className="counter-area pt-100 mb-100"
                style={{
                    backgroundImage: "url(assets/img/an-bg/an-bg04.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="single-counter text-center">
                                <img src="assets/img/icon/cunt-icon01.png" alt="img" />
                                <div className="counter p-relative">
                                    <span className="count">500</span>
                                    <small>+</small>
                                </div>
                                <p>Doctors At Work</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="single-counter text-center">
                                <img src="assets/img/icon/cunt-icon02.png" alt="img" />
                                <div className="counter p-relative">
                                    <span className="count">58796</span>
                                    <small>+</small>
                                </div>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="single-counter text-center">
                                <img src="assets/img/icon/cunt-icon03.png" alt="img" />
                                <div className="counter p-relative">
                                    <span className="count">500</span>
                                    <small>+</small>
                                </div>
                                <p>Medical Beds</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="single-counter text-center">
                                <img src="assets/img/icon/cunt-icon04.png" alt="img" />
                                <div className="counter p-relative">
                                    <span className="count">200</span>
                                    <small>+</small>
                                </div>
                                <p>Winning Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter-area-end */}
            {/* newslater-area */}
            <section
                className="newslater-area pb-50"
                style={{
                    backgroundImage: "url(assets/img/an-bg/an-bg06.png)",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-4 col-lg-4 col-lg-4">
                            <div className="section-title mb-100">
                                <span>NEWSLETTER</span>
                                <h2>Subscribe To Our Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <form
                                name="ajax-form"
                                id="contact-form4"
                                action="#"
                                method="post"
                                className="contact-form newslater pb-130"
                            >
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        id="email2"
                                        name="email"
                                        type="email"
                                        placeholder="Email Address..."
                                        defaultValue=""
                                        required=""
                                    />
                                    <button type="submit" className="btn btn-custom" id="send2">
                                        Subscribe <i className="fas fa-chevron-right" />
                                    </button>
                                </div>
                                {/* /Form-email */}
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <img src="assets/img/bg/news-illustration.png" />
                        </div>
                    </div>
                </div>
            </section>
            {/* newslater-aread-end */}
            {/* testimonial-area */}
            <section
                id="testimonios"
                className="testimonial-area testimonial-p pt-50 pb-85 fix"
                style={{
                    backgroundImage: "url(assets/img/an-bg/an-bg07.png)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title center-align mb-60 text-center">
                                <span>TESTIMONIAL</span>
                                <h2>What Our Client’s Say’s</h2>
                                <p>
                                    Fusce pharetra odio in urna laoreet laoreet. Aliquam erat
                                    volutpat. Phasellus nec ligula arcu. Aliquam eu urna pulvinar,
                                    iaculis ipsum in, porta massa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="testimonial-active">
                                <div className="single-testimonial">
                                    <div className="testi-img">
                                        <img src="assets/img/testimonial/testimonial-img.png" alt="img" />
                                    </div>
                                    <div className="single-testimonial-bg">
                                        <div className="com-icon">
                                            <img src="assets/img/testimonial/qutation.png" alt="img" />
                                        </div>
                                        <div className="testi-author">
                                            <div className="ta-info">
                                                <h6>Adam McWilliams</h6>
                                                <span>CEO &amp; Founder</span>
                                            </div>
                                        </div>
                                        <p>
                                            Nullam metus mi, sollicitudin eu elit non, laoreet consectetur
                                            urna. Nullam quis aliquet elit. Cras augue tortor, lacinia et
                                            fermentum eget, suscipit id ligula. Donec id mollis sem, nec
                                            tincidunt neque. Pellentesque habitant morbi tristique
                                            senectus et netus et malesuada fames ac turpis egestas.
                                        </p>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="testi-img">
                                        <img src="assets/img/testimonial/testimonial-img.png" alt="img" />
                                    </div>
                                    <div className="single-testimonial-bg">
                                        <div className="com-icon">
                                            <img src="assets/img/testimonial/qutation.png" alt="img" />
                                        </div>
                                        <div className="testi-author">
                                            <div className="ta-info">
                                                <h6>Rose Dose</h6>
                                                <span>Sale Executive</span>
                                            </div>
                                        </div>
                                        <p>
                                            Nullam metus mi, sollicitudin eu elit non, laoreet consectetur
                                            urna. Nullam quis aliquet elit. Cras augue tortor, lacinia et
                                            fermentum eget, suscipit id ligula. Donec id mollis sem, nec
                                            tincidunt neque. Pellentesque habitant morbi tristique
                                            senectus et netus et malesuada fames ac turpis egestas.
                                        </p>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="testi-img">
                                        <img src="assets/img/testimonial/testimonial-img.png" alt="img" />
                                    </div>
                                    <div className="single-testimonial-bg">
                                        <div className="com-icon">
                                            <img src="assets/img/testimonial/qutation.png" alt="img" />
                                        </div>
                                        <div className="testi-author">
                                            <div className="ta-info">
                                                <h6>Margie R. Robinson</h6>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                        <p>
                                            Nullam metus mi, sollicitudin eu elit non, laoreet consectetur
                                            urna. Nullam quis aliquet elit. Cras augue tortor, lacinia et
                                            fermentum eget, suscipit id ligula. Donec id mollis sem, nec
                                            tincidunt neque. Pellentesque habitant morbi tristique
                                            senectus et netus et malesuada fames ac turpis egestas.
                                        </p>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="testi-img">
                                        <img src="assets/img/testimonial/testimonial-img.png" alt="img" />
                                    </div>
                                    <div className="single-testimonial-bg">
                                        <div className="com-icon">
                                            <img src="assets/img/testimonial/qutation.png" alt="img" />
                                        </div>
                                        <div className="testi-author">
                                            <div className="ta-info">
                                                <h6>Jone Dose</h6>
                                                <span>MD &amp; Founder</span>
                                            </div>
                                        </div>
                                        <p>
                                            Nullam metus mi, sollicitudin eu elit non, laoreet consectetur
                                            urna. Nullam quis aliquet elit. Cras augue tortor, lacinia et
                                            fermentum eget, suscipit id ligula. Donec id mollis sem, nec
                                            tincidunt neque. Pellentesque habitant morbi tristique
                                            senectus et netus et malesuada fames ac turpis egestas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial-area-end */}
            {/* brand-area */}
            <div
                className="brand-area"
                style={{
                    backgroundImage: "url(assets/img/an-bg/an-bg12.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="container">
                    <div className="row brand-active">
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src="assets/img/brand/c-logo.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand active">
                                <img src="assets/img/brand/c-logo02.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src="assets/img/brand/c-logo03.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src="assets/img/brand/c-logo04.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src="assets/img/brand/c-logo.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* brand-area-end */}
        </main>
    );
}

export default About;