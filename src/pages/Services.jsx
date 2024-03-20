import Breadcrumb from "../components/Breadcrumb";

const Services = () => {
    return (
        <main>
            <Breadcrumb title="Services" name="News"/>
            {/* services-area */}
            <section
                id="services"
                className="services-area services-bg services-two pt-100 pb-70"
                style={{
                    backgroundImage: "url(assets/img/bg/services_aliment_bg.html)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                }}
            >
                <div className="container">
                    <div className="row sr-line">
                        <div className="col-lg-4 col-md-12">
                            <div className="s-single-services text-center active">
                                <div className="services-icon">
                                    <img src="assets/img/icon/sr-icon01.png" alt="img" />
                                </div>
                                <div className="second-services-content">
                                    <h5>
                                        <a href="services-detail.html">Online Emergency</a>
                                    </h5>
                                    <p>
                                        Mauris nunc felis, congue eu convallis in, bibendum vitae nisl.
                                        Duis vestibulum eget orci maximus pretium.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="s-single-services text-center">
                                <div className="services-icon">
                                    <img src="assets/img/icon/sr-icon02.png" alt="img" />
                                </div>
                                <div className="second-services-content">
                                    <h5>
                                        <a href="services-detail.html">Medication Service</a>
                                    </h5>
                                    <p>
                                        Mauris nunc felis, congue eu convallis in, bibendum vitae nisl.
                                        Duis vestibulum eget orci maximus pretium.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="s-single-services text-center">
                                <div className="services-icon">
                                    <img src="assets/img/icon/sr-icon03.png" alt="img" />
                                </div>
                                <div className="second-services-content">
                                    <h5>
                                        <a href="services-detail.html">24hr Health Program</a>
                                    </h5>
                                    <p>
                                        Mauris nunc felis, congue eu convallis in, bibendum vitae nisl.
                                        Duis vestibulum eget orci maximus pretium.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services-area-end */}
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
            {/* faq-area */}
            <section
                className="faq-area pt-50 pb-50 fix"
                style={{
                    backgroundImage: "url(assets/img/shape/header-sape6.html)",
                    backgroundPosition: "right center",
                    backgroundSize: "auto",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="contact-img">
                                <img src="assets/img/bg/touch-illustration.png" alt="touch-illustration" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title left-align mb-50">
                                <h2>Frequently Asked Questions</h2>
                                <p>
                                    Duis non aliquet tellus, in mollis leo. Phasellus quis posuere
                                    dui. Nulla mauris purus, mattis eget sagittis at, accumsan sed
                                    leo.
                                </p>
                            </div>
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button
                                                    className="faq-btn"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="true"
                                                    aria-controls="collapseThree"
                                                >
                                                    Aliquam varius ligula nec leo tempus porta.
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse show"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button
                                                    className="faq-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="collapseOne"
                                                >
                                                    Suspendisse vitae varius diam, a vulputate urna.
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button
                                                    className="faq-btn collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Aliquam aliquet purus eget lacus pretium.
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq-aread-end */}
        </main>
    );
}

export default Services;