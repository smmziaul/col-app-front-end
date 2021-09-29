import React from 'react'
import { withRouter } from 'react-router';

import classes from './CollegeListItem.module.css';

function CollegeListItem(props) {
	const { name, state, _id, viewDetails } = props;
	return (
		<div className={classes.CollegeListItem}>
			<div className={classes.CollegeDetails}>
				<div>{name}</div>
				<span>{state}</span>
			</div>
			<button onClick={viewDetails}>View Details</button>
		</div>
	)
}

export default CollegeListItem;