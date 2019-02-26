import React from "react";
export const Footer = () => {
	return (
		<footer className="footer">
			<div
				className="container-fluid"
				style={{
					bottom: 0,
					width: "100%",
					height: "125px",
					backgroundColor: "#404347",
					textAlign: "center",
					paddingTop: "50px"
				}}>
				<span style={{ color: "white" }}>
					Copyright © Your Website 2019
				</span>
			</div>
		</footer>
	);
};
