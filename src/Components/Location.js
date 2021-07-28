import React, { Component } from "react";

export default class Location extends Component {
	render() {
		return (
			<div className="pt-12 mx-auto w-80  text-center">
				<h2 className="md:mr-26">Konum</h2>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1479.0482513211714!2d24.747680319559525!3d42.1482217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5932ddd1d0dfe7c!2sCuma%20T%C3%BCrk%20Kahvesi%20ve%20Pasta%20D%C3%BCkkan%C4%B1!5e0!3m2!1str!2sbg!4v1627475274722!5m2!1str!2sbg"
					width="300px"
					height="200px"
					allowfullscreen=""
					loading="lazy"
					title="Location"
					className="mr-24 mt-12"
				></iframe>
			</div>
		);
	}
}
