import React, { useEffect, useState } from 'react'
import CollegeListItem from './CollegeListItem';
import classes from './CollegeList.module.css';
import { withRouter } from 'react-router';
import { getCollegeList } from '../services/list';

function CollegeList(props) {
	const [colleges, setColleges] = useState([]);

	useEffect(() => {
		let mounted = true;
		getCollegeList()
			.then(colleges => {
				if (mounted) {
					setColleges(colleges.data)
				}
			})
		return () => mounted = false;
	}, [])

	return (
		<div className={classes.CollegeList}>
			{colleges.map(college => <CollegeListItem key={college._id} {...college} viewDetails={() => props.history.push(`/colleges/view/${college._id}`, { _id: college._id })} />)}
		</div>
	)
}

export default withRouter(CollegeList);
