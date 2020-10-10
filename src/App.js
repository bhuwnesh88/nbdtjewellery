import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import "./App.css";
function App() {
	document.body.style.backgroundColor = "#093363";
	return (
		<>
			<Row justify="start" align="middle">
				<Col xs={22} md={15} sm={15} lg={12} xl={22}>
					<div className="bg-white h-32 w-full flex justify-center items-center">
						<img
							src={require("./mahavir/logobig.png")}
							className="w-auto h-16"
						/>
						<ul className="flex justify-center items-center h-full w-auto">
							<li className="p-4 uppercase font-bold">GOLD</li>
							<li className="p-4 uppercase font-bold">silver</li>
							<li className="p-4 uppercase font-bold">diamond</li>
							<li className="p-4 uppercase font-bold">gold+diamond</li>
							<li className="p-4 uppercase font-bold">collection</li>
							<li className="p-4 uppercase font-bold">offers</li>
							<li className="p-4 uppercase font-bold">try at home</li>
							<li className="p-4 uppercase font-bold">fortune 50 scheme</li>
							<li className="p-4 uppercase font-bold">
								<img
									src={require("./mahavir/icons/search.png")}
									style={{ width: 20 }}
								/>
							</li>
							<li className="p-4">
								<img
									src={require("./mahavir/icons/heart.png")}
									style={{ width: 20 }}
								/>
							</li>
							<li className="p-4">
								<img
									src={require("./mahavir/icons/pro.png")}
									style={{ width: 20 }}
								/>
							</li>
						</ul>
					</div>
				</Col>
				<Col xl={2}>
					<center>
						<img
							src={require("./mahavir/icons/cart.png")}
							style={{ width: 22 }}
						/>
						<b
							style={{
								fontFamily: "mr",
								color: "#fff",
								fontSize: 12,
								paddingTop: 4,
								fontWeight: 100,
							}}
						>
							cart ( 2 )
						</b>
					</center>
				</Col>
			</Row>

			<Row justify="start">
				<Col xs={22} md={15} sm={15} lg={12} xl={12}>
					<div className="bg-white flex justify-center items-center h-full">
						<img
							src={require("./mahavir/bannerproduct.png")}
							style={{ height: 400 }}
						/>
					</div>
				</Col>
				<Col
					xs={22}
					md={15}
					sm={15}
					lg={12}
					xl={10}
					style={{ background: "#fff", position: "initial" }}
				>
					<img
						src={require("./mahavir/banner.png")}
						style={{ height: 310, width: "50%", position: "absolute" }}
					/>
				</Col>
			</Row>

			<Row>
				<Col xs={22} md={15} sm={15} lg={12} xl={12}>
					<center>
						<div className="bg-white h-full">
							<h1
								className="uppercase text-lg text-left tracking-normal"
								style={{
									color: "#946b1c",
									fontFamily: "mr",
									fontWeight: 100,
									paddingLeft: "17%",
								}}
							>
								Memories etched in diamond
							</h1>

							<h1
								className="uppercase text-5xl text-left tracking-normal"
								style={{ color: "#000", fontFamily: "mb", paddingLeft: "17%" }}
							>
								Custom solitaries
							</h1>
							<div className="bg-white flex justify-around items-center h-full w-2/3">
								<div>
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>{" "}
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>{" "}
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>
								</div>
								<div>
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>{" "}
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>{" "}
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>
									<p className="text-xs text-gray-700 font-bold m-1">
										Loreum ipsum Loreum ipsum Loreum ipsum
									</p>
								</div>
							</div>
						</div>
					</center>
				</Col>
				<Col xs={22} md={15} sm={15} lg={12} xl={10} className="bg-white">
					<div
						className="shadow-md p-12 pt-4"
						style={{
							background: "#f0eee2",
							height: 130,
							position: "absolute",
							width: "119.5%",
						}}
					>
						<center>
							<h1
								className="uppercase text-sm tracking-normal text-left mb-0 pb-0"
								style={{ color: "#946b1c", fontFamily: "mr" }}
							>
								colors of the season
							</h1>
							<h1
								className="uppercase text-2xl tracking-normal text-left"
								style={{ color: "#000", fontFamily: "mr" }}
							>
								new collection - <br /> diamond & emerald jewellery
							</h1>
						</center>
					</div>
				</Col>
			</Row>

			<Row justify="start">
				<Col
					xs={22}
					md={15}
					sm={15}
					lg={12}
					xl={22}
					style={{
						background: "#fff",
					}}
				>
					<center>
						<div
							style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								background: "#fff",
								height: 350,
								width: "90%",
							}}
						>
							<center>
								<div style={{ width: 200, height: 150 }}>
									<img
										src={require("./mahavir/img3.png")}
										style={{ width: 200, height: 200, objectFit: "fill" }}
									/>
								</div>
								<p className="mt-12 capitalize font-bold text-sm mb-1">
									diamond cocktail ring
								</p>
								<p
									className="text-center text-xs text-gray-500"
									style={{ fontSize: 6, width: "60%" }}
								>
									Lorem ipsum, or lipsum as it is sometimes known, is dummy
									text.
								</p>
							</center>
							<center>
								<div style={{ width: 200, height: 150 }}>
									<img
										src={require("./mahavir/img1.png")}
										style={{ width: 200, height: 200, objectFit: "cover" }}
									/>
								</div>
								<p className="mt-12 capitalize font-bold text-sm mb-1">
									marquise diamond hoop earrings
								</p>
								<p
									className="text-center text-xs text-gray-500"
									style={{ fontSize: 6, width: "60%" }}
								>
									Lorem ipsum, or lipsum as it is sometimes known, is dummy
									text.
								</p>
							</center>
							<center>
								<div style={{ width: 200, height: 150 }}>
									<img
										src={require("./mahavir/img2.png")}
										style={{ width: 200, height: 200, objectFit: "cover" }}
									/>
								</div>
								<p className="mt-12 capitalize font-bold text-sm mb-1">
									ruby drop earring
								</p>
								<p
									className="text-center text-xs text-gray-500"
									style={{ fontSize: 6, width: "60%" }}
								>
									Lorem ipsum, or lipsum as it is sometimes known, is dummy
									text.
								</p>
							</center>
							<center>
								<div style={{ width: 200, height: 150 }}>
									<img
										src={require("./mahavir/img1.png")}
										style={{ width: 200, height: 200, objectFit: "cover" }}
									/>
								</div>
								<p className="mt-12 capitalize font-bold text-sm mb-1">
									marquise diamond hoop earrings{" "}
								</p>
								<p
									className="text-center text-xs text-gray-500"
									style={{ fontSize: 6, width: "60%" }}
								>
									Lorem ipsum, or lipsum as it is sometimes known, is dummy
									text.
								</p>
							</center>
							<center>
								<div style={{ width: 200, height: 150 }}>
									<img
										src={require("./mahavir/img3.png")}
										style={{ width: 200, height: 200, objectFit: "fill" }}
									/>
								</div>
								<p className="mt-12 capitalize font-bold text-sm mb-1">
									diamond cocktail ring
								</p>
								<p
									className="text-center text-xs text-gray-500"
									style={{ fontSize: 6, width: "60%" }}
								>
									Lorem ipsum, or lipsum as it is sometimes known, is dummy
									text.
								</p>
							</center>
						</div>
					</center>
				</Col>
			</Row>
			<Row>
				<Col xl={22} style={{ background: "#fff" }}>
					<img
						src={require("./mahavir/offerbanner.png")}
						className="w-auto h-auto p-24 ml-8"
					/>
				</Col>
			</Row>

			<Row>
				<Col xl={22} style={{ background: "#fff" }}>
					<img
						src={require("./mahavir/offer.png")}
						className="w-auto h-auto p-24 pt-0 pb-8 ml-8"
					/>
				</Col>
			</Row>
			<Row justify="start">
				<Col xl={22} className="bg-white">
					<h1
						className="uppercase w-full text-center text-4xl"
						style={{ fontFamily: "mm" }}
					>
						offers
					</h1>
				</Col>
			</Row>
			<Row>
				<Col xl={22} style={{ background: "#fff" }}>
					<img
						src={require("./mahavir/offer.png")}
						className="w-auto h-auto p-24 pt-8 pb-5 ml-8"
					/>
				</Col>
			</Row>
			<Row justify="start">
				<Col xl={22} className="bg-white">
					<h1
						className="uppercase w-full text-center text-4xl"
						style={{ fontFamily: "mm" }}
					>
						Trending products
					</h1>
					<h1
						className="capitalize w-full text-gray-500 text-center text-lg font-normal"
						style={{ fontFamily: "mr" }}
					>
						One Girl’s Journey To Making Her Fashion Dreams Come True In
						Elements Jewellers
					</h1>
				</Col>
			</Row>

			<Row>
				<Col xl={22} style={{ background: "#fff" }}>
					<div className="w-auto h-auto p-24 pt-8 pb-5 ml-8 flex justify-between">
						<div style={{ width: 220, height: "auto" }}>
							<center>
								<img
									src={require("./mahavir/collection1.png")}
									style={{ width: 220, height: "auto" }}
								/>
								<p
									className="capitalize font-normal text-center w-full pt-4"
									style={{ fontFamily: "mr" }}
								>
									Diamond Simul Neckless
								</p>
								<button className="border-solid border-2 border-gray-600 p-2 pl-4 pr-4">
									Add to cart
								</button>
							</center>
						</div>
						<div style={{ width: 220, height: "auto" }}>
							<center>
								<img
									src={require("./mahavir/collection2.png")}
									style={{ width: 220, height: "auto" }}
								/>
								<p
									className="capitalize font-normal text-center w-full pt-4"
									style={{ fontFamily: "mr" }}
								>
									Diamond Simul Neckless
								</p>
								<button className="border-solid border-2 border-gray-600 p-2 pl-4 pr-4">
									Add to cart
								</button>
							</center>
						</div>

						<div style={{ width: 220, height: "auto" }}>
							<center>
								<img
									src={require("./mahavir/collection3.png")}
									style={{ width: 220, height: "auto" }}
								/>
								<p
									className="capitalize font-normal text-center w-full pt-4"
									style={{ fontFamily: "mr" }}
								>
									Diamond Simul Neckless
								</p>
								<button className="border-solid border-2 border-gray-600 p-2 pl-4 pr-4">
									Add to cart
								</button>
							</center>
						</div>

						<div style={{ width: 220, height: "auto" }}>
							<center>
								<img
									src={require("./mahavir/collection4.png")}
									style={{ width: 220, height: "auto" }}
								/>
								<p
									className="capitalize font-normal text-center w-full pt-4"
									style={{ fontFamily: "mr" }}
								>
									Diamond Simul Neckless
								</p>
								<button className="border-solid border-2 border-gray-600 p-2 pl-4 pr-4">
									Add to cart
								</button>
							</center>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xl={22} style={{ background: "#fff" }}>
					<img
						src={require("./mahavir/offer.png")}
						className="w-auto h-auto p-24 pt-8 pb-5 ml-8"
					/>
				</Col>
			</Row>

			<Row>
				<Col xl={24} style={{ background: "#fff" }}>
					<img
						src={require("./mahavir/discountsection.png")}
						className="w-auto h-auto "
					/>
				</Col>
			</Row>

			<Row justify="start">
				<Col xl={22} className="bg-white">
					<h1
						className="uppercase w-full text-center text-4xl"
						style={{ fontFamily: "mm" }}
					>
						Collections
					</h1>
				</Col>
			</Row>

			<Row>
				<Col xl={22} style={{ background: "#fff" }}>
					<div className="w-auto h-auto p-24 pt-8 pb-5 ml-8 flex justify-between">
						<div style={{ width: 300, height: "auto" }}>
							<center>
								<img
									src={require("./mahavir/collection2.png")}
									style={{ width: 300, height: "auto" }}
								/>
								<p
									className="capitalize font-normal text-left w-full pt-1 m-0 pb-0"
									style={{ fontFamily: "mr" }}
								>
									Available upto 20%
								</p>
								<p
									className="capitalize font-normal text-left w-full "
									style={{ fontFamily: "mr", color: "#999", fontSize: 12 }}
								>
									Rare
								</p>
							</center>
						</div>
						<div style={{ width: 300, height: "auto" }}>
							<center>
								<img
									src={require("./mahavir/collection4.png")}
									style={{ width: 300, height: "auto" }}
								/>
								<p
									className="capitalize font-normal text-left w-full pt-1 m-0 pb-0"
									style={{ fontFamily: "mr" }}
								>
									Make it
								</p>
								<p
									className="capitalize font-normal text-left w-full "
									style={{ fontFamily: "mr", color: "#999", fontSize: 12 }}
								>
									Customize your jewellery
								</p>
							</center>
						</div>
						<div style={{ width: 300, height: "auto" }}>
							<center>
								<img
									src={require("./mahavir/collection3.png")}
									style={{ width: 300, height: "auto" }}
								/>
								<p
									className="capitalize font-normal text-left w-full pt-1 m-0 pb-0"
									style={{ fontFamily: "mr" }}
								>
									Available upto 20%
								</p>
								<p
									className="capitalize font-normal text-left w-full "
									style={{ fontFamily: "mr", color: "#999", fontSize: 12 }}
								>
									Rare
								</p>
							</center>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xl={24} style={{ background: "#fff" }}>
					<img
						src={require("./mahavir/footerbanner.png")}
						style={{ width: "100%", height: 350, objectFit: "cover" }}
					/>
					<Row
						justify="end"
						align="middle"
						style={{
							position: "absolute",
							top: "0%",
							width: "-webkit-fill-available",
							height: "100%",
						}}
					>
						<Col xl={7}>
							<h1 className="capitalize text-3xl" style={{ fontFamily: "mb" }}>
								get latest from us!
							</h1>
							<h1
								className="text-xs"
								style={{
									color: "#999",
									fontFamily: "mr",
									width: "70%",
									fontWeight: 100,
								}}
							>
								join our list to save 10% off your next purchase and get the
								latest on new arrivals, promotions and style inspiration.
							</h1>
							<div style={{ display: "flex" }}>
								<input
									className="bg-transparent border-solid border-2 border-grey-400 h-8 pl-4 w-32 text-sm rounded-sm"
									placeholder="Enter your mail"
								/>
								<button
									style={{
										background: "#093363",
										color: "#fff",
										padding: 5,
										fontSize: 10,
										fontFamily: "mr",
										borderRadius: 3,
										textTransform: "uppercase",
									}}
								>
									sign up
								</button>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row
				justify="space-around"
				align="middle"
				style={{ background: "#fff", padding: "5%", paddingBottom: "7%" }}
			>
				<Col xl={3} style={{ padding: 8, height: 200 }}>
					<center>
						<h1
							className="uppercase font-medium text-sm text-left"
							style={{ fontFamily: "mb" }}
						>
							Your account
						</h1>

						<ul className="list-disc pl-4">
							<li className="text-left capitalize">Special</li>
							<li className="text-left capitalize"> price drops</li>
							<li className="text-left capitalize">contact us</li>
							<li className="text-left capitalize">our store</li>
							<li className="text-left capitalize">sitemap</li>
							<li className="text-left capitalize">credit slips</li>
						</ul>
					</center>
				</Col>
				<Col xl={3} style={{ padding: 8, height: 200 }}>
					<center>
						<h1
							className="uppercase font-medium text-sm text-left"
							style={{ fontFamily: "mb" }}
						>
							Products
						</h1>

						<ul className="list-disc pl-4">
							<li className="text-left capitalize">legal notice</li>
							<li className="text-left capitalize"> privacy</li>
							<li className="text-left capitalize">new product</li>
							<li className="text-left capitalize">our store</li>
							<li className="text-left capitalize">price drops</li>
							<li className="text-left capitalize">best sales</li>
						</ul>
					</center>
				</Col>
				<Col xl={3} style={{ padding: 8, height: 200 }}>
					<center>
						<h1
							className="uppercase font-medium text-sm text-left"
							style={{ fontFamily: "mb" }}
						>
							Your account
						</h1>

						<ul className="list-disc pl-4">
							<li className="text-left capitalize">Special</li>
							<li className="text-left capitalize"> price drops</li>
							<li className="text-left capitalize">contact us</li>
							<li className="text-left capitalize">our store</li>
							<li className="text-left capitalize">sitemap</li>
							<li className="text-left capitalize">credit slips</li>
						</ul>
					</center>
				</Col>
				<Col xl={4} style={{ padding: 8, height: 200 }}>
					<center>
						<h1
							className="uppercase font-medium text-sm text-left"
							style={{ fontFamily: "mb" }}
						>
							Store information
						</h1>

						<ul className="">
							<li className="text-left capitalize text-xs flex justify-center ">
								<img
									src={require("./mahavir/icons/location.png")}
									style={{ width: 10, height: 13 }}
								/>{" "}
								<b
									style={{
										marginTop: -5,
										marginLeft: 3,
										fontWeight: 100,
										fontFamily: "mr",
									}}
								>
									Hotel Madhuban Parisar, Sadar Bazar Rd, Sadar Bazar, Raipur,
									Chhattisgarh 492001
								</b>{" "}
							</li>
							<li className="text-left capitalize text-xs flex justify-start items-start mt-2">
								<img
									src={require("./mahavir/icons/call.png")}
									style={{
										width: 10,
										height: 10,
									}}
								/>{" "}
								<b
									style={{
										marginTop: -5,
										marginLeft: 3,
										fontWeight: 100,
										fontFamily: "mr",
									}}
								>
									077122 33502
								</b>
							</li>
							<li className="text-left capitalize text-xs flex justify-start items-center mt-2">
								<img
									src={require("./mahavir/icons/email.png")}
									style={{ width: 10, height: 7 }}
								/>
								<b
									style={{
										marginTop: -2,
										marginLeft: 3,
										fontWeight: 100,
										fontFamily: "mr",
									}}
								>
									info@gmail.com
								</b>{" "}
							</li>
							<li className="text-left capitalize mt-4">
								<div style={{ display: "flex" }}>
									<input
										className="bg-gray-200 border-solid border-1 border-grey-400 h-8 pl-4 w-32 text-sm"
										placeholder="Enter your mail"
									/>
									<button
										style={{
											background: "#093363",
											color: "#fff",
											padding: 5,
											fontSize: 12,
											fontFamily: "mr",
										}}
									>
										subscribe
									</button>
								</div>
							</li>
						</ul>
					</center>
				</Col>
				<Col xl={3} style={{ padding: 8, height: 200 }}>
					<center>
						<h1
							className="uppercase font-medium text-sm text-left"
							style={{ fontFamily: "mb" }}
						>
							Connect
						</h1>

						<ul className="flex justify-start">
							<li className="text-left capitalize">
								<img
									src={require("./mahavir/icons/fb.png")}
									style={{ width: 5 }}
								/>
							</li>
							<li className="text-left capitalize">
								<img
									src={require("./mahavir/icons/insta.png")}
									style={{ width: 10, marginLeft: 8 }}
								/>
							</li>
							<li className="text-left capitalize">
								<img
									src={require("./mahavir/icons/twitter.png")}
									style={{ width: 10, marginLeft: 8 }}
								/>
							</li>
						</ul>
					</center>
				</Col>
			</Row>
			<Row justify="start" className="bg-white" style={{ height: 100 }}>
				<Col xl={22}>
					<p className="text-sm pl-32" style={{ fontFamily: "mb" }}>
						© 2020, Powered by NB Digital Technologies
					</p>
				</Col>
			</Row>
		</>
	);
}

export default App;
