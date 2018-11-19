import React from 'react'

const BtnComp = ({ prop1, prop2 }) => {
	return (
		<div>
			<button className={ prop1 }>{ prop2 }</button>
		</div>
	)
}

export default BtnComp
