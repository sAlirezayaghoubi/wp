import React, {useState} from "react";
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    };
    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div
                        className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Engineering (bachelor)</h3>
                                <span className="qualification__subtitle">Shahid Beheshti university</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">mathematics and physics (pre-university)</h3>
                                <span className="qualification__subtitle">Salam school</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2018
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">mathematics and physics (diploma)</h3>
                                <span className="qualification__subtitle">Salam school</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Fullstack Developer</h3>
                                <span className="qualification__subtitle">Omid Technologies Inc.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Network engineer</h3>
                                <span className="qualification__subtitle">Tehran Urban and Suburban Railway Company</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend developer</h3>
                                <span className="qualification__subtitle">Sharif Accelerator</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Summer 2019 & 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
export default Qualification