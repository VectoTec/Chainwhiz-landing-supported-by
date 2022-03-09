import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const BackCard = ({ title, body }) => {
	return (
		<Card
			sx={{
				borderShadow: "none",
				boxShadow: "none",
				backgroundColor: "#232323",
				minHeight: "310px",
			}}
		>
			<CardActionArea>
				<CardContent p={3}>
					<Typography
						gutterBottom
						component="div"
						sx={{
							color: "#D7FF2E",
							fontWeight: 500,
							fontSize: "21px",
							lineHeight: "40px",
							fontFamily : "Poppins"
						}}
					>
						{title}
					</Typography>
					<Typography
						sx={{
							color: "#fff",
							fontSize: "18px",
							lineHeight: "40px",
						}}
					>
						{body}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
export default BackCard;
