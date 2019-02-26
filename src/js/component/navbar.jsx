import React from "react";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
			<div className="container">
				<a href="/" className="navbar-brand float-left">
					Start Bootstrap
				</a>
				<ul className="nav navbar-nav flex-row float-right">
					<li className="nav-item active">
						<a className="nav-link pr-3" href="">
							<span className="sr-only">(current)</span>
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link pr-3" href="">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link pr-3" href="">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
