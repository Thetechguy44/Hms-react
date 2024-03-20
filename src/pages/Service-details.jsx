import Breadcrumb from "../components/Breadcrumb";

const Service_Details = () => {
    return (
        <main>
            <Breadcrumb title="Services Details" name="Services Details"/>
            {/* choose-area */}
            <section className="choose-area pt-100 pb-50 p-relative">
                <div
                    className="chosse-img wow fadeInRight animated"
                    data-animation="fadeInRight animated"
                    data-delay=".2s"
                />
                <div className="container">
                    <div className="row">
                        {/* rightside */}
                        <div className="content-side col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2">
                            <div className="service-detail">
                                <div className="images-box row">
                                    <div className="column col-lg-12 col-md-12 col-sm-8 wow fadeInLeft">
                                        <figure className="image wow fadeIn">
                                            <a
                                                href="assets/img/resource/service-img-1.html"
                                                className="lightbox-image"
                                                data-fancybox="services"
                                            >
                                                <img src="assets/img/blog/inner_b1.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h2>Online Emergency</h2>
                                    <p>
                                        Pleasure and praising pain was born and I will give you a
                                        complete account of the systems, and expound the actually
                                        teachings of the great explorer of the truth, the master-builder
                                        of human uts happiness. No one rejects, dislikes, or avoids
                                        pleasure itself, because it is pleasure, but because those who
                                        do not know how to pursue pleasure rationally encounter
                                        consequences that are extremely painful. Nor again is there
                                        anyone who loves or pursues or desires to obtain pain of itself.
                                    </p>
                                    {/* Two Column */}
                                    <div className="two-column">
                                        <div className="row">
                                            <div className="text-column col-xl-12 col-lg-12 col-md-12">
                                                <p>
                                                    Industar develops, builds and finances utility scale solar
                                                    and storage projects throughout the United States. We
                                                    specialize in developing renewable solutions to suit the
                                                    specific needs of large investor owned utilities.
                                                </p>
                                                <ul className="list-style-one">
                                                    <li>Engine oil level should be regularly checked</li>
                                                    <li>Tyres have a minimum of 1.6mm of tread depth</li>
                                                    <li>Ensure that the electrolyte level is correct</li>
                                                    <li>Never remove the radiator when the engine is</li>
                                                    <li>Ensure that your vehicle's brake fluid is full</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Why Choose This Service</h3>
                                    <p>
                                        Complete account of the systems and expound the actually
                                        teachings of the great explorer of the truth, the master-builder
                                        of human uts happiness. No one rejects, dislikes, or avoids
                                        pleasure itself, because it is pleasure, but because those who
                                        do not know how to pursue pleasure rationally encounter
                                        consequences that are extremely painful anyone who loves or
                                        pursues.
                                    </p>
                                    <p>
                                        Complete account of the systems and expound the actually
                                        teachings of the great explorer of the truth, the master-builder
                                        of human uts happiness. No one rejects, dislikes, or avoids
                                        pleasure itself, because it is pleasure, but because those who
                                        do not know how to pursue pleasure rationally encounter
                                        consequences that are extremely painful anyone who loves or
                                        pursues.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* rightside */}
                        {/* leftside */}
                        <div className="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar services-sidebar">
                                {/* Category Widget */}
                                <div className="sidebar-widget categories">
                                    <div className="widget-content">
                                        {/* Services Category */}
                                        <ul className="services-categories">
                                            <li>
                                                <a href="services.html">All Services</a>
                                            </li>
                                            <li className="active">
                                                <a href="service-detail.html">Online Emergency</a>
                                            </li>
                                            <li>
                                                <a href="services-detail.html">Medication Service</a>
                                            </li>
                                            <li>
                                                <a href="service-detail.html">24hr Health Program</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Brochures Box*/}
                                <div className="brochures-box">
                                    <div className="inner">
                                        <h4>Download Brochures</h4>
                                        <div className="text">
                                            Pleasure and praising pain was born and I will give you a
                                            complete account.
                                        </div>
                                        <a className="theme-btn btn-style-one" href="#">
                                            <span className="btn-title">
                                                <i className="fa fa-file-pdf" /> Info Company
                                            </span>
                                        </a>
                                        <a className="theme-btn btn-style-one" href="#">
                                            <span className="btn-title">
                                                <i className="fa fa-file-pdf" /> Brochure Newest
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        {/* /leftside */}
                    </div>
                </div>
            </section>
            {/* choose-area-end */}
        </main>

    );
}

export default Service_Details;