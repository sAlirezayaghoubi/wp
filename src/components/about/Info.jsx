import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">+3 years working</span>
            </div>
            <div className="about__box">
                <i className="bx bx-file about__icon"></i>
                <h3 className="about__title">Bachelor degree</h3>
                <span className="about__subtitle">Shahid Beheshti University</span>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed Projects</h3>
                <span className="about__subtitle">48 + Projects </span>
            </div>
        </div>
    )
}
export default Info