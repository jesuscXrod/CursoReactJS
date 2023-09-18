import React from "react";
import './Loader.css'

const Loader = () => {
    return (
        <div className="centered-content">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="gap-patch">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
