import React, { Component } from 'react';
import mCash from '../img/mCash.png';
import nibbs from '../img/nibbs.png';

import CompLogo from './compLogo';
import Board from './TechBoard';
import Api from './ApiFor'
import CustDesc from './custDesc';
import Ready from './ReadyComp';
import ReadyBtn from './ReadyBtns';
import CustSaying from './custSaying';
import CustSayingCard from './custSayingCard';

class Home extends Component{

	state = {
		img: [nibbs, mCash, nibbs],
		ApiTitle:{
			Title: `Api's for Nigeria`,
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris risus, fermentum et arcu vel, congue egestas mauris.`
		},
		imgDesc: ["nibbs", "mCash"],
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris risus, fermentum et arcu vel, congue egestas mauris.`

	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="Board">
						<div className="row">
							<div className="col l7"> 
								<Board />
							</div>
							<div className="col l4"> 
								<CompLogo prop={ this.state.img } />
							</div>					
						</div>					
					</div>
					<div className="apiDespSec">
						<Api prop={ this.state.ApiTitle } />
					</div>

					<div className="custDesc row">
						<CustDesc srcy={this.state.img[0]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
						<CustDesc srcy={this.state.img[0]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
						<CustDesc srcy={this.state.img[0]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
					</div>				
				</div>
				<div style={{ backgroundColor: '#fff', padding: '20px' }} className="row">
					<Ready />
					<ReadyBtn />
				</div>
				<div style={{ marginTop: '100px', overflow: 'hidden' }} className="row container">
					<CustSaying  />
					<CustSayingCard srcy={this.state.img[0]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
					<CustSayingCard srcy={this.state.img[0]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
				</div>										
			</div>
		)
	}
}

export default Home