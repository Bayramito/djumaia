import React, { Component } from "react";

export default class Comments extends Component {
	render() {
		return (
			<div className="flex w-3/4 mx-auto shadow-md hover:shadow-2xl  border-b-2 border-dashed border-yellow-500 duration-500 my-12">
				<img
					className=" w-12 h-12 ml-4"
					src={this.props.clientProfile}
					alt="Client Profile Photo From Google Maps "
				/>
				<div className="px-2">
					<h4>{this.props.client}</h4>
					<br />
					<p className="py-2">{this.props.clientCom}</p>
				</div>
			</div>
		);
	}
}
