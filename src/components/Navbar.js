import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar(props) {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
		>
			<div className="container">
				<Link className="navbar-brand mx-4" to="/">
					{props.title}
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
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item mx-2">
							<Link className="nav-link active " aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link className="nav-link" to="/about">
								{props.aboutText}
							</Link>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-primary" type="submit">
							Search
						</button>
					</form>
				</div>
				{/* <div className="mode-box">
					<div className="mode mode--1" onClick={props.toogleMode}></div>
					<div className="mode mode--2" onClick={props.toogleMode}></div>
					<div className="mode mode--3" onClick={props.toogleMode}></div>
				</div> */}
				<div
					className={`form-switch form-check mx-4 text-${
						props.mode === "light" ? "dark" : "light"
					}`}
				>
					<input
						type="checkbox"
						className="form-check-input"
						id="customSwitches"
						onClick={props.toogleMode}
					/>
					<label className="custom-control-label" htmlFor="customSwitches">
						Dark Mode Enabled
					</label>
				</div>
			</div>
		</nav>
	);
}

// navbar proptypes defined the props types
Navbar.propTypes = {
	aboutText: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

// Default props values
Navbar.defaultProps = {
	aboutText: "About",
	title: "title text here",
};
