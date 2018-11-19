import React, { Component } from 'react'
import BtnComp from './ButtonCom';

class ReadyBtn extends Component {

	state ={
		btn1: `CREATE AN ACCOUNT TODAY`,
		bt1Style: `btn green darken-3`,
		btn2: `CONTACT US`,
		bt2Style: `btn green darken-3`,		
	}

	render() {
		return (
			
			<div className="container">
				<div className="col s6">
					<div className="boardBtn readyBtn">
						<BtnComp prop1={ this.state.bt1Style } prop2={ this.state.btn1 } />
						<BtnComp prop1={ this.state.bt2Style } prop2={ this.state.btn2 } />
					</div>			
				</div>
			</div>	
			
		)
	}
}

export default ReadyBtn
 