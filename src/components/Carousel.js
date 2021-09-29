import React from 'react'

import classes from './Carousel.module.css';

export default function Carousel({ data, viewDetails }) {
	return (
		<div>
			<div style={{marginLeft: '10px', fontSize: '24px'}}>Similar Colleges</div>
			<div className={classes.Carousel}>
				{data.map((college) => (
					<div key={college.id} className={classes.Card} onClick={() => viewDetails(college.id)}>
						{college.name}
					</div>
				))}
			</div>
		</div>
	)
}
