import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            {/* breadcrumb-area */}
            <section
                className="breadcrumb-area d-flex align-items-center"
                style={{ backgroundImage: "url(img/testimonial/test-bg.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title mb-30">
                                    <h2>404 ERROR</h2>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Back</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <Link to="/">Home</Link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb-area-end */}
        </div>
    );
}

export default ErrorPage;