import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { getCollegeDetails } from '../services/details';
// import Carousel from './Carousel';
import classes from './CollegeDetails.module.css';
import raw_json from './sample_raw_json';

function CollegeDetails(props) {
	const collegeId = props.location.state._id;
	const [collegeDetails, setCollegeDetails] = useState([]);

	useEffect(() => {
		let mounted = true;
		getCollegeDetails(collegeId)
			.then(collegeDetails => {
				if (mounted) {
					setCollegeDetails(collegeDetails.data)
				}
			})
		return () => mounted = false;
	}, [])

	return (
		<div className={classes.collegeDetailsContainer}>
			<h2>
				College Details
			</h2>
			<table>
				<tr>
					<th>Name</th>
					<th>Established in</th>
					<th>City</th>
					<th>State</th>
					<th>Country</th>
					<th># of Students</th>
				</tr>
				<tr>
					<td>{collegeDetails.name}</td>
					<td>{collegeDetails.year}</td>
					<td>{collegeDetails.city}</td>
					<td>{collegeDetails.state}</td>
					<td>{collegeDetails.country}</td>
					<td>{collegeDetails.no_of_students}</td>
				</tr>
			</table>

			<h2>
				Courses Offered
			</h2>

			<div>
				<ol>
					{raw_json.data.courses.map(course => {
						return <li key={course}>{course}</li>
					})}
				</ol>
			</div>

			<h2>
				Students On Roll
			</h2>
			<table>
				<tr>
					<th>Name</th>
					<th>Batch</th>
				</tr>
				{raw_json.data.students.map(student => {
					return <tr key={student._id}>
						<td>{student.name}</td>
						<td>{student.batch}</td>
					</tr>
				})}
			</table>

			<h2>
				Similar Colleges
			</h2>
			<table>
				<tr>
					<th>Name</th>
					<th>Established in</th>
					<th>City</th>
					<th>State</th>
					<th>Country</th>
					<th># of Students</th>
				</tr>
				{raw_json.data.similar_colleges.map(similarCollege => {
					return <tr key={similarCollege._id}>
						<td>{similarCollege.name}</td>
						<td>{similarCollege.year}</td>
						<td>{similarCollege.city}</td>
						<td>{similarCollege.state}</td>
						<td>{similarCollege.country}</td>
						<td>{similarCollege.no_of_students}</td>
					</tr>
				})}
			</table>

		</div>
	)
}

export default withRouter(CollegeDetails);
