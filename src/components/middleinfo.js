import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
function MiddleInfo({nextBtn, prevBtn, image, name, title, quote}) {
    return (
        <div className="mid-div">
            <div className="img-div">
                <img src={image} alt="people" className="image"/>
            </div>
            <button className="left-btn" onClick={prevBtn}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button className="right-btn" onClick={nextBtn}><FontAwesomeIcon icon={faArrowRight} /></button>
            <h3 className="first-heading">{name}</h3>
            <h5 className="second-heading">{title}</h5>
            <p className="para">{quote}</p>
        </div>
    )
}
export default MiddleInfo;