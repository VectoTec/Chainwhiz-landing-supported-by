import React, { useState } from "react";
import {
	Box,
	CssBaseline,
	Typography,
	Grid,
	Container,
	Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Flipper from "../components/flipper";
import FrontCard from "../components/frontCard";
import BackCard from "../components/backCard";
import { ArrowRightRounded, ArrowLeftRounded } from "@mui/icons-material";

const CustomButton = styled(Button)`
	text-transform: none;
	border: none;
	&:hover {
		border: 1px solid #d7ff2e;
		border-radius: 36px;
	}
`;

const SupportedBy = () => {
	const [flip1, setFlip1] = useState(false);
	const [flip2, setFlip2] = useState(false);
	const [hover, setHover] = useState(false);

	const NearFrontCard = () =>
		FrontCard({
			image: "/assets/supportedBy/near.svg",
			alt: "Near",
			body: "Awarded a grant from NEAR Protocol to build Chainwhiz on NEAR chain",
		});

	const NearBackCard = () =>
		BackCard({
			title: "What is NEAR?",
			body: "Through simple, secure, and scalable technology, NEAR empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.",
		});

	const PolygonFrontCard = () =>
		FrontCard({
			image: "/assets/supportedBy/polygon.svg",
			alt: "Polygon",
			body: "Awarded a grant from the Polygon Team to help build Chainwhiz on Polygon Mainnet",
		});

	const PolygonBackCard = () =>
		BackCard({
			title: "What is polygon?",
			body: " Polygon believes in Web3 for all. Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.",
		});

	return (
		// <React.Fragment>
		// 	<CssBaseline />
			<Box sx={{minHeight :"100vh" , backgroundColor: "#000"}}>
				<Container maxWidth="xl">
					<Grid
						container
						justifyContent="center"
						alignItems="center"
					>
						<Grid item pt={6}>
							<Box>
								<Typography
									variant="h3"
									gutterBottom
									color="common.white"
									sx={{ fontWeight: 700 , textAlign : "center" , fontFamily : "Poppins"}}
								>
									Our Biggest{" "}
									<span style={{ color: "#D6FE2E" }}>
										Cheerleaders
									</span>
								</Typography>
							</Box>
						</Grid>
						<Grid item>
							<Box m={2} p={2}>
								<Grid
									container
									direction="row"
									justifyContent="space-around"
									alignItems="center"
								>
									<Grid item xs={10} md={5} p={1} mb={1}>
										<span
											onMouseEnter={async () => {
												if (!flip2)
													await setFlip2(true);
												await setFlip1(false);
											}}
											onMouseLeave={async () => {
												if (flip2)
													await setFlip2(false);
												await setFlip1(false);
											}}
										>
											<Flipper
												isFlipped={flip1}
												FrontCard={NearFrontCard}
												BackCard={PolygonBackCard}
											/>
										</span>
									</Grid>
									<Grid item xs={10} md={5} p={1} mt={1}>
										<span
											onMouseEnter={async () => {
												if (!flip1)
													await setFlip1(true);
												await setFlip2(false);
											}}
											onMouseLeave={async () => {
												if (flip1)
													await setFlip1(false);
												await setFlip2(false);
											}}
										>
											<Flipper
												isFlipped={flip2}
												FrontCard={PolygonFrontCard}
												BackCard={NearBackCard}
											/>
										</span>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						<Grid item pb={2}>
							<Box>
								<CustomButton
									variant="outlined"
									href="https://medium.com/articles-more-every-week/chainwhiz-smashes-the-benchmarks-of-project-building-with-a-grant-from-near-protocol-42322e39d005"
									target="_blank"
									onMouseEnter={async () =>
										await setHover(true)
									}
									onMouseLeave={async () =>
										await setHover(false)
									}
								>
									<Typography
										variant="h5"
										p={1.5}
										ml={1.5}
										mr={1.5}
										color="#D6FE2E"
										sx={{ fontWeight: 700 , fontFamily : "Poppins"}}
									>
										Read Articles{" "}
										{!hover && (
											<ArrowRightRounded
												fontSize="large"
												sx={{
													verticalAlign: "middle",
												}}
											/>
										)}
										{hover && (
											<ArrowLeftRounded
												fontSize="large"
												sx={{
													verticalAlign: "middle",
												}}
											/>
										)}
									</Typography>
								</CustomButton>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		// </React.Fragment>
	);
};
export default SupportedBy;
