import React from "react";
import { SingleCard } from "./singlecard.jsx";

export const Cards = () => {
	return (
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<SingleCard cardbody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." />
			<SingleCard cardbody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />
			<SingleCard cardbody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." />
			<SingleCard cardbody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />
		</div>
	);
};
