import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Department = () => {
    return (
        <main>
            <Breadcrumb title="Departments" name="Project"/>
            {/* department-area */}
            <section
                className="department-area cta-bg pb-70 pt-100 fix"
                style={{
                    backgroundImage: "url(assets/img/an-bg/an-bg05.png)",
                    backgroundSize: "contain"
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <div>
                                            <img src="assets/img/icon/de-icon01.png" alt="de-icon" />
                                        </div>
                                    </div>
                                    <Link to="/department_details" className="text">
                                        <h3>Pedlatric</h3>
                                        Fusce eget condimentum lectus, sed commodo dui. Suspendisse non
                                        vehicula ant aecenas placerat finibus metus, at finibus neque.
                                    </Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <div>
                                            <img src="assets/img/icon/de-icon02.png" alt="de-icon" />
                                        </div>
                                    </div>
                                    <Link to="/department_details" className="text">
                                        <h3>Dental</h3>
                                        Fusce eget condimentum lectus, sed commodo dui. Suspendisse non
                                        vehicula ant aecenas placerat finibus metus, at finibus neque.
                                    </Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <div>
                                            <img src="assets/img/icon/de-icon03.png" alt="de-icon" />
                                        </div>
                                    </div>
                                    <Link to="/department_details" className="text">
                                        <h3>Physicians</h3>
                                        Fusce eget condimentum lectus, sed commodo dui. Suspendisse non
                                        vehicula ant aecenas placerat finibus metus, at finibus neque.
                                    </Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <div>
                                            <img src="assets/img/icon/de-icon03.png" alt="de-icon" />
                                        </div>
                                    </div>
                                    <Link to="/department_details" className="text">
                                        <h3>Physicians</h3>
                                        Fusce eget condimentum lectus, sed commodo dui. Suspendisse non
                                        vehicula ant aecenas placerat finibus metus, at finibus neque.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="s-d-img p-relative">
                                <img src="assets/img/bg/de-illustration.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* department-area-end */}
        </main>

    );
}

export default Department;