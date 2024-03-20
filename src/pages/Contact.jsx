import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
    return (
        <main>
            <Breadcrumb title="Contact Us" name="News"/>
            {/* contact-area */}
            <section
                id="contact"
                className="contact-area contact-bg pt-100 pb-70 p-relative fix"
                style={{
                    backgroundImage: "url(assets/img/an-bg/an-bg11.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-img">
                                <img src="assets/img/bg/touch-illustration.png" alt="touch-illustration" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title mb-60">
                                <span>Contact</span>
                                <h2>Get In Touch With Us</h2>
                            </div>
                            <form action="#" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="contact-field p-relative c-name mb-20">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-field p-relative c-name mb-20">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-email mb-20">
                                            <input type="text" placeholder="Write here youremail" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-subject mb-20">
                                            <input type="text" placeholder="I would like to discuss" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-message mb-45">
                                            <textarea
                                                name="message"
                                                id="message"
                                                cols={30}
                                                rows={10}
                                                placeholder="Write comments"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="slider-btn">
                                            <a
                                                href="#"
                                                className="btn ss-btn"
                                                data-animation="fadeInRight"
                                                data-delay=".8s"
                                            >
                                                Send Message
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact-area-end */}
            {/* brand-area */}
            <section
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
            </section>
            {/* brand-area-end */}
        </main>

    );
}

export default Contact;