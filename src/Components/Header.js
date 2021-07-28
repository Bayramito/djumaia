import React, { Component } from "react";
import { HamburgerButton } from "react-hamburger-button";
const menu = ["Menü", "Hakkımızda", "img", "İletişim", "Konum"];
export default class Header extends Component {
	render() {
		return (
			<div className="headerBGG h-screen">
				<NavBar />
				<MobileNav />
				<NavText />
			</div>
		);
	}
}

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonStat: 0,
		};
	}

	render() {
		return (
			<div className="md:inline hidden nav-bg fixed top-0 right-0 left-0   w-full text-xl ">
				<div className="flex justify-between mx-auto w-9/12 ">
					{menu.map((item, index) => {
						if (item === "img") {
							return (
								<h1 className="py-8 fontMonteCarlo text-6xl text-red-700">
									Djumaia
								</h1>
							);
						}
						return (
							<p
								onClick={() => this.setState({ buttonStat: index })}
								className=" px-12 py-12 cursor-pointer"
								style={
									this.state.buttonStat === index ? { color: "#EEB76B" } : {}
								}
							>
								{item}
							</p>
						);
					})}
				</div>
			</div>
		);
	}
}

class NavText extends Component {
	render() {
		return (
			<div className="  text-center text-white py-96 ">
				<h1 className="fontMonteCarlo text-5xl  ">The Premium Bakery</h1>
				<br />
				<p className="temacolor text-3xl">Awesome Tasty And Good Material</p>
			</div>
		);
	}
}

class MobileNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}
	handleClick() {
		this.setState({
			open: !this.state.open,
		});
	}
	render() {
		return (
			<div className=" nav-bg">
				<div className="md:hidden flex justify-between items-center">
					<h1 className="py-2 fontMonteCarlo text-6xl text-center text-red-700">
						Djumaia
					</h1>
					<div className="py-2 px-4">
						<HamburgerButton
							open={this.state.open}
							onClick={this.handleClick.bind(this)}
							width={35}
							height={30}
							strokeWidth={2}
							color="red"
							animationDuration={0.5}
						/>
					</div>
				</div>
				{this.state.open && <div>merhaba</div>}
			</div>
		);
	}
}
