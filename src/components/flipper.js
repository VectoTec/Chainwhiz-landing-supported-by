import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const Flipper = ({ isFlipped, FrontCard, BackCard }) => {
	return (
		<Flippy
			isFlipped={isFlipped}
			flipOnClick={false}
			style={{ height: "100%" }}
		>
			<FrontSide style={{ padding: 0, boxShadow: "none" }}>
				<FrontCard />
			</FrontSide>
			<BackSide style={{ padding: 0, boxShadow: "none" }}>
				<BackCard />
			</BackSide>
		</Flippy>
	);
};
export default Flipper;
