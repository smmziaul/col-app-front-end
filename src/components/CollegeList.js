import React, { useEffect, useState } from 'react'

import CollegeListItem from './CollegeListItem';

import classes from './CollegeList.module.css';

export default function CollegeList() {
	const [colleges, setColleges] = useState([]);

	useEffect(() => {
		// you might have trouble using an async function here. See how to use async function inside useEffect
		// replace data with data from api call to list colleges

		const data = [
			{
				name: 'molestias et eveniet',
				location: 'Lake Cyril',
				id: 14470
			},
			{
				name: 'Non est doloremque a provident voluptatem molestias quam similique',
				location: 'South Reece',
				id: 41212
			},
			{
				name: 'molestias quisquam dicta',
				location: 'Pfannerstillborough',
				id: 76782
			},
			{
				name: 'a voluptatum fuga',
				location: 'Maximeside',
				id: 7139
			},
			{
				name: 'corporis eaque aperiam',
				location: 'Violettemouth',
				id: 60136
			},
			{
				name: 'non quos dolorum',
				location: 'Port Kaci',
				id: 37458
			},
			{
				name: 'velit et consequuntur',
				location: 'Haleymouth',
				id: 92447
			},
			{
				name: 'a fuga error',
				location: 'Everettbury',
				id: 77158
			},
			{
				name: 'repellendus optio tempora',
				location: 'Port Lonzotown',
				id: 12680
			},
			{
				name: 'et molestiae aut',
				location: 'South Valentine',
				id: 57508
			}
		];
		setColleges(data);
	}, []);

	return (
		<div className={classes.CollegeList}>
			{colleges.map(college => <CollegeListItem key={college.id} {...college}/>)}
		</div>
	)
}
