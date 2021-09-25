import React from 'react'

import classes from './CollegeListItem.module.css';

export default function CollegeListItem({ name, location, id }) {
	return (
		<div className={classes.CollegeListItem}>
			<div className={classes.CollegeDetails}>
				<div>{name}</div>
				<span>{location}</span>
			</div>
			<a href={"/"+id}>View Details</a>
		</div>
	)
}
