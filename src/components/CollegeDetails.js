import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import Carousel from './Carousel';
import raw_json from './sample_raw_json';

function CollegeDetails(props) {
	// use this id to get college by id and find similar colleges
	const id = props.location.state.id;



	const [similarColleges, setSimilarColleges] = useState([]);

	const [collegeDetails, setCollegeDetails] = useState([]);



	useEffect(() => {
		// you might have trouble using an async function here. See how to use async function inside useEffect
		// replace similarColleges with data from api call to get similar colleges
		const similarColleges = [
			{
				name: 'molestias et eveniet',
				location: 'Lake Cyril',
				id: 39465
			},
			{
				name: 'Non est doloremque a provident voluptatem molestias quam similique',
				location: 'South Reece',
				id: 47835
			},
			{
				name: 'molestias quisquam dicta',
				location: 'Pfannerstillborough',
				id: 19658
			},
			{
				name: 'a voluptatum fuga',
				location: 'Maximeside',
				id: 45626
			},
			{
				name: 'corporis eaque aperiam',
				location: 'Violettemouth',
				id: 30976
			},
			{
				name: 'non quos dolorum',
				location: 'Port Kaci',
				id: 99985
			},
			{
				name: 'velit et consequuntur',
				location: 'Haleymouth',
				id: 99356
			},
			{
				name: 'a fuga error',
				location: 'Everettbury',
				id: 45928
			},
			{
				name: 'repellendus optio tempora',
				location: 'Port Lonzotown',
				id: 47914
			},
			{
				name: 'et molestiae aut',
				location: 'South Valentine',
				id: 157
			}
		];

		setCollegeDetails(raw_json.data);
		setSimilarColleges(similarColleges);
	}, []);

	return (
		<div>
			<div>college details should come here for {id}</div>


			<table>
				<tr>
					<th>Name</th>
					<th>Batch</th>
					<th>College ID</th>
				</tr>

				{raw_json.data.students.map(student => {
					return <tr key={student.name}>
						<th>{student.name}</th>
						<th>{student.batch}</th>
						<th>{student.college_id}</th>
					</tr>
				})}

			</table>

			<Carousel data={similarColleges} viewDetails={(id) => props.history.push(`/colleges/view/${id}`, { id })} />
		</div>
	)
}

export default withRouter(CollegeDetails);
