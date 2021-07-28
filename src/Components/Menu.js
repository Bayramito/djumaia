import React, { Component } from "react";

const data = [
	{
		name: "Künefe",
		source:
			"https://imgrosetta.mynet.com.tr/file/11674342/11674342-728xauto.jpg",
		price: "5.00",
	},
	{
		name: "Baklava",
		source:
			"https://iasbh.tmgrup.com.tr/6f0d1d/800/420/0/0/1152/604?u=https://isbh.tmgrup.com.tr/sbh/2020/02/17/baklava-nasil-yapilir-ev-yapimi-baklava-tarifi-1581950004034.jpg",
		price: "8.00",
	},
	{
		name: "Katmer",
		source:
			"https://iasbh.tmgrup.com.tr/56c268/650/344/0/103/1152/708?u=https://isbh.tmgrup.com.tr/sbh/2020/03/09/katmer-tarifi-meshur-gaziantep-katmeri-nasil-yapilir-1583755760279.jpg",
		price: "3.00",
	},
	{
		name: "Trileçe",
		source:
			"https://i4.hurimg.com/i/hurriyet/75/750x422/5cadb345c03c0e2c18231b46.jpg",
		price: "12.00",
	},
	{
		name: "Sütlaç",
		source:
			"https://cdn.yemek.com/mnresize/940/940/uploads/2015/03/ytk-firin-sutlac-site.jpg",
		price: "7.00",
	},
	{
		name: "Aşure",
		source:
			"https://i4.hurimg.com/i/hurriyet/75/750x422/5f47c0107af50726649ecb2e.jpg",
		price: "5.00",
	},
	{
		name: "Supangle",
		source:
			"https://iasbh.tmgrup.com.tr/00e227/1200/627/0/113/800/531?u=https://isbh.tmgrup.com.tr/sbh/2020/04/28/supangle-tarifi-supangle-nasil-yapilir-1588076567979.jpg",
		price: "12.30",
	},
];

export default class Menu extends Component {
	render() {
		return (
			<div>
				<h2 className="fontMonteCarlo text-5xl text-center">Menümüz</h2>
				<br />
				<div className="md:grid  md:grid-cols-4 mx-auto md:w-3/4 md:w-1/2  place-content-center gap-8 px-16">
					{data.map((item, index) => {
						return (
							<ProductBox
								key={index}
								name={item.name}
								source={item.source}
								price={item.price}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

class ProductBox extends Component {
	render() {
		return (
			<div className="bg-white shadow hover:shadow-2xl duration-500 my-4 md:w-52">
				<img className=" w-full h-32" src={this.props.source} alt="Product" />
				<br />
				<h3 className="px-4 fontMonteCarlo text-4xl py-0">{this.props.name}</h3>
				<br />
				<p className="text-right pr-4 pb-4 fontMonteCarlo menupara">
					{this.props.price}&nbsp;
					<span className=" text-xs font-bold">BGN</span>
				</p>
			</div>
		);
	}
}
