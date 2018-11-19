import React from 'react'
import { Link } from 'react-router-dom'

const CustDesc = ({img, imgDesc, text}) => {
	return (
		
		<div>
			<div className="col s4">
				<div className="card">
					<div className="card-content">
						<div className="mainCardCont">
							<div className="boardBtn"> 
								<img src={ img } />
								<h5>{ imgDesc }</h5>
							</div>
							<div>
								<p>{text}</p>
							</div>
							<div>
								<Link to="/">Learn More</Link>
							</div>
						</div>
					</div>
				</div>					
			</div>
		</div>	
		
	)
}

export default CustDesc
 