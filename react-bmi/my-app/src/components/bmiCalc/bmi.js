
import React, { Component } from 'react';

export default class bmi extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }
    calcBMI(e) {
        console.log("ezz");
    }
	render() {
		return (
			<div>
                <from onSubmit={this.calcBMI }>
					<labrl>Waga w kilogramach</labrl>
					<input type="number" /><br />
					<label>Wzrost w centymetrach</label>
                    <input type="number" /><br />
                    <input type="submit" value="Oblicz"/>
				</from>
			</div>
		);
	}
}
