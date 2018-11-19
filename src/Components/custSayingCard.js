import React from 'react'

const CustSayingCard = ({img, imgDesc, text}) => {
	return (
		<div>
			<div className="col s4 container">
				<div className="card">
					<div className="card-content">
						<div className="mainCardCont">
							<div>
								<p>{text}</p>
							</div>
							<div className="boardBtn"> 
								<h5>{ imgDesc }</h5>
								<img src={ img } style={{ marginTop: '100px' }}/>
							</div>
						</div>
					</div>
				</div>					
			</div>
		</div>	
		
	)
}

export default CustSayingCard