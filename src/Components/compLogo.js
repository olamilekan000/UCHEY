import React from 'react'

const CompLogo = ({prop}) => {
	console.log(prop)
	let Logo = prop.map(eachLogog => {
		return (
			<div className="col s4">
				<div className="card">
					<div className="card-content">
						<img src={ eachLogog } />
					</div>
				</div>					
			</div>
		)
	})
	return (
		
		<div className="row">
			{ Logo }
		</div>	
		
	)
}

export default CompLogo
 