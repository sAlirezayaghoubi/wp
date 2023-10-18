import React, {useState} from "react";
import "./services.css"

const Services = () => {
    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <i className="uil uil-server-network services__icon"></i>
                    <h3 className="services__title">Network <br/> Engineer</h3>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Network Engineer</h3>
                            <p className="services__modal-description">Service more than 2 years of experience.
                                Providing quality work to clients and companies</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I troubleshoots network problems.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I update data servers and network equipment.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I collaborate with network architects on network optimization.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I accomplish information systems and organization mission by completing related results as needed.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I maximize performance by troubleshooting network problems and outages and scheduling upgrades.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="services__content">
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Backend <br/> Developer</h3>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Backend Developer</h3>
                            <p className="services__modal-description">Service more than 3 years of experience.
                                Providing quality work to clients and companies</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I develop the user interface</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="services__content">
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Frontend <br/> Developer</h3>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Frontend Developer</h3>
                            <p className="services__modal-description">Design and implement more than 5 websites.
                                Providing quality work to clients and companies</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I develop new user-facing features.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I build reusable code and libraries for future use
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I ensure the technical feasibility of UI/UX designs
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I optimize application for maximum speed and scalability
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">I assure that all user input is validated before submitting to back-end
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Services