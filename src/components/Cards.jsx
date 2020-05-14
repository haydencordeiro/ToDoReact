import React, { Component } from "react";
class CardsT extends Component {
	state = {
		value: this.props.value,
		text: this.props.text,
		Date: this.props.date,
	};
	render() {
        console.log(this.props);
        
		return (
			<div className="badge badge-primary">
				<h1>{this.state.text}</h1>
				<h1>{this.state.value}</h1>
				<h1>{this.state.Date}</h1>
                <button onClick={this.ks}>CLick</button>
			</div>
		);
    }
    ks=()=>
    {
    this.setState({value:this.props.value})
    }
}

export default CardsT;
