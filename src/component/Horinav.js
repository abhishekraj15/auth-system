import React from 'react'
import './../App.css';

export default function Horinav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark custom-border">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/logo_edited.jpg" alt="Bootstrap" width="30" height="30" />
                    </a>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <form className="d-flex mx-1 "  role="search" style={{ marginLeft: '1110px',position:'absolute', top:'5px'}}>
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
