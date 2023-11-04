import React from 'react';
import './../App.css'

export default function Qrscanner() {
    return (
        <div className="container">
            <a className="navbar-brand" href="/">
                <img className="vish" src="/smartphone-fingerprint-scan-svgrepo-com.svg" alt="Bootstrap"  />
            </a>
            <h1 className="class1" >SCAN ME</h1>
            <p className="class2" >Hold the camera to this image</p>
            <img src="./website.png"  className="card1" alt="..." />
        </div>
    );
}
