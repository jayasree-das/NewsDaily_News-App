import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const handleCountryChange = (e) =>{
        props.setCountry(e.target.value)
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src="logo1.png"
                            alt="..."
                            height="50"
                            width="50"
                            className="d-inline-block align-text"
                        />{" "}
                        <b>NEWSDAILY</b>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                            <li className="nav-item mx-4">
                                <Link className="nav-link" aria-current="page" to="/general">
                                    <b>Home</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" to="/business">
                                    <b>Business</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" to="/sports">
                                    <b>Sports</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" to="/entertainment">
                                    <b>Entertainment</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" to="/health">
                                    <b>Health</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link" to="/science">
                                    <b>Science</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/technology">
                                    <b>Technology</b>
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <h6 style={{marginTop:'8px',marginRight:'15px'}}><b>Country: </b></h6>
                            <select className="form-select" onChange={handleCountryChange} value={props.country}>
                                    <option value="in" key="in">India</option>
                                    <option value="ch" key="ch">China</option>
                                    <option value="us" key="us">United States</option>
                                    <option value="ca" key="ca">Canada</option>
                                    <option value="jp" key="jp">Japan</option>
                            </select>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
