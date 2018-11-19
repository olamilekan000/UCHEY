import React, { Component } from 'react'
import BtnComp from './ButtonCom'

class Board extends Component{

	state = {
		title: 'Technology For Nigerians',
		text: `A set of APIs that allows developers to utilise APIs to  solve Nigeria’s hard problems towards presence-less,  paperless, and cashless service delivery.`,
		btn1: `Learn More`,
		bt1Style: `btn green darken-3`,
		btn2: `START BUILDING`,
		bt2Style: `btn green darken-3`,

	}

	render() {
		return (
			<div>
				<h3>{ this.state.title }</h3>
				<p>{ this.state.text }</p>
				<div className="boardBtn">
					<BtnComp prop1={ this.state.bt1Style } prop2={ this.state.btn1 }/>
					<BtnComp prop1={ this.state.bt2Style } prop2={ this.state.btn2 }/>
				</div>
			</div>
		)
	}
}

export default Board
