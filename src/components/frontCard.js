import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const FrontCard = ({ image, body, alt }) => {
	return (
		<Card
			sx={{
				borderShadow: "none",
				boxShadow: "none",
				background: "#000",
				minHeight: "310px",
			}}
		>
			<CardActionArea>
				<CardMedia
					style={{ padding: "5% 30%" }}
					component="img"
					width="30%"
					image={image}
					alt={alt}
				/>
				<CardContent>
					<Typography
						sx={{
							color: "#fff",
							textAlign: "center",
							fontSize: "21px",
							lineHeight: "34px",
							fontFamily : "Poppins"
						}}
					>
						{body}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
export default FrontCard;
