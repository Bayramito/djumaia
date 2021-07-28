import React, { Component } from "react";
import Designed from "./Designed";
import Location from "./Location";

export default class Footer extends Component {
	render() {
		return (
			<div className="footerbg text-white ">
				<div className="blackopacity  pb-12  w-full ">
					<div className="md:flex  md:justify-between">
						{/* Arkası Siyah */}
						<div>
							<h2 className="pt-14 px-24 fontMonteCarlo text-6xl text-red-700">
								Djumaia
							</h2>
							<br />
							<p className="px-24">Türk Mutfağından Lezzetler</p>
						</div>
						{/* Logo ve Slogam */}
						<div className="pt-16  md:w-80 w-52 mx-auto">
							<h3>İletişim</h3>
							<br />
							<div class="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>

								<p className="px-4">
									пл. „Джумаята“, ul. "Zhelezarska" 1, 4000 Plovdiv
								</p>
							</div>

							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<p className="px-4">mail@djumaia.bg</p>
							</div>

							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<p className="px-4">032 631 402</p>
							</div>
						</div>
						{/* İletişim */}

						<div>
							<Location />
						</div>
						{/* Konum :  Google Maps Verisi */}
					</div>
					<br />
					<Designed />
				</div>
			</div>
		);
	}
}
