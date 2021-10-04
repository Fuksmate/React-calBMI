import React, { Component } from 'react';

class Bmi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueWage: Number,
			valueHeight: Number
		};

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeWage = this.handleChangeWage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({  valueHeight: event.target.value });
    }
    handleChangeWage(event) {
		this.setState({  valueWage: event.target.value });
	}

	handleSubmit(event) {
		alert('waga/(wzrost)  ' + this.state.valueHeight/((this.state.valueWage/100)*(this.state.valueWage/100)));
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<labrl>Waga w kilogramach</labrl>
					<input type="number" value={this.state.valueWage} onChange={this.handleChangeWage} />
					<br />
					<label>Wzrost w centymetrach</label>
					<input type="number" value={this.state.valueHeight} onChange={this.handleChange} />
					<br />
					<input type="submit" value="Oblicz" />
				</form>
			</div>
		);
	}
}
export default Bmi;
