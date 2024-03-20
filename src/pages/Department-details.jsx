import Breadcrumb from "../components/Breadcrumb";

const Department_Details = () => {
    return (
        <main>
            <Breadcrumb title="Department Details" name="Project Deatails"/>
            {/* Project Detail */}
            <section className="project-detail pt-100">
                <div className="container">
                    {/* Upper Box */}
                    <div className="upper-box">
                        <div className="single-item-carousel owl-carousel owl-theme">
                            <figure className="image">
                                <img src="assets/img/blog/inner_b3.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                    {/* Lower Content */}
                    <div className="lower-content">
                        <div className="row">
                            <div className="text-column col-lg-8 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h2>Project Description</h2>
                                    <p>
                                        Pleasure and praising pain was born and I will give you a
                                        complete account of the systems, and expound the actually
                                        teachings of the great explorer of the truth, the master-builder
                                        of human uts happiness. No one rejects, dislikes, or avoids
                                        pleasure itself, because it is pleasure, but because those who
                                        do not know how to pursue pleasure rationally encounter that are
                                        extremely painful. Nor again is there anyone who loves or
                                        pursues or desires to obtain pain of itself pursues or desires
                                        to obtain pain of itself.
                                    </p>
                                    <h3>What We Did</h3>
                                    <p>
                                        Complete account of the systems and expound the actually
                                        teachings of the great explorer of the truth, the master-builder
                                        of human uts happiness. No one rejects, dislikes, or avoids
                                        pleasure itself, because it is pleasure, but because those who
                                        do not know how to pursue pleasure rationally encounter
                                        consequences that are painful anyone who loves or pursues nyone
                                        who loves or pursues.
                                    </p>
                                    <ul className="list-style-one">
                                        <li>
                                            Engine oil level should be regularly checked Tyres have a
                                            minimum of 1.6mm of tread depth
                                        </li>
                                        <li>
                                            Ensure that the electrolyte level is correct Never remove the
                                            radiator when the engine is
                                        </li>
                                        <li>
                                            Ensure that your vehicle's brake fluid is full Engine oil
                                            level should be regularly checked
                                        </li>
                                    </ul>
                                    <h3>Results</h3>
                                    <p>
                                        Complete account of the systems and expound the actually
                                        teachings of the great explorer of the truth, the master-builder
                                        of human uts happiness.
                                    </p>
                                </div>
                            </div>
                            <div className="info-column col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <strong>When we work</strong>
                                    <h3>Doctors work schedule</h3>
                                    <ul className="schedule">
                                        <li>
                                            <div className="days"> Monday </div>
                                            <div className="date"> 8:00 - 18:00 </div>
                                        </li>
                                        <li>
                                            <div className="days"> Tuesday </div>
                                            <div className="date"> 8:00 - 18:00 </div>
                                        </li>
                                        <li>
                                            <div className="days"> Wednesday</div>
                                            <div className="date"> 10:00 - 20:00</div>
                                        </li>
                                        <li>
                                            <div className="days"> Thursday</div>
                                            <div className="date"> 8:00 - 18:00 </div>
                                        </li>
                                        <li>
                                            <div className="days"> Friday </div>
                                            <div className="date"> 8:00 - 18:00 </div>
                                        </li>
                                        <li>
                                            <div className="days"> Saturday</div>
                                            <div className="date"> Weekend </div>
                                        </li>
                                        <li>
                                            <div className="days"> Sunday </div>
                                            <div className="date"> Weekend </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Project Detail */}
        </main>

    );
}

export default Department_Details;