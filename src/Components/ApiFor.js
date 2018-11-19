import React from 'react'

const Api = ({ prop }) => {
	return (
		<div className="center">
			<span></span>
			<h2>{prop.Title}</h2>
			<p>{prop.text}</p>
		</div>
	)
}

export default Api
