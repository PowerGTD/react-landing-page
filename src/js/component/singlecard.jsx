import React from "react";
import PropType from "prop-types";

export const SingleCard = props => {
	return (
		<div className="card" style={{ width: "258px" }}>
			<img
				className="card-img-top"
				src="https://via.placeholder.com/500x325"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">{props.cardbody}</p>
			</div>
			<div className="card-footer" style={{ textAlign: "center" }}>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

SingleCard.propTypes = {
	cardbody: PropType.string
};
