import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getCollegeDetails } from "../services/details";
import classes from "./CollegeDetails.module.css";

function CollegeDetails(props) {
  var collegeId;
  if (props.location.state) {
    // navigated from pervious page
    collegeId = props.location.state._id;
  } else {
    // fallback when visiting the page directly
    const path = props.location.pathname;
    collegeId = path.substring(path.lastIndexOf("/") + 1);
  }
  console.log("new col id: ", collegeId);

  const [collegeDetails, setCollegeDetails] = useState([]);

  useEffect(() => {
    let mounted = true;
    getCollegeDetails(collegeId).then((collegeDetails) => {
      if (mounted) {
        setCollegeDetails(collegeDetails.data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className={classes.collegeDetailsContainer}>
      <h2>College Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Established in</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th># of Students</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{collegeDetails.name}</td>
            <td>{collegeDetails.year}</td>
            <td>{collegeDetails.city}</td>
            <td>{collegeDetails.state}</td>
            <td>{collegeDetails.country}</td>
            <td>{collegeDetails.no_of_students}</td>
          </tr>
        </tbody>
      </table>
      <h2>Courses Offered</h2>
      <div>
        <ol>
          {!collegeDetails || !collegeDetails.courses
            ? null
            : collegeDetails.courses.map((course, i) => {
                return <li key={i}>{course}</li>;
              })}
        </ol>
      </div>
      <h2>Students On Roll</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {!collegeDetails || !collegeDetails.students
            ? null
            : collegeDetails.students.map((student) => {
                return (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.batch}</td>
                    <td>{student.skills.join(", ")}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <h2>Similar Colleges</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Established in</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th># of Students</th>
          </tr>
        </thead>
        <tbody>
          {!collegeDetails || !collegeDetails.similar_colleges
            ? null
            : collegeDetails.similar_colleges.map((similarCollege) => {
                return (
                  <tr key={similarCollege._id}>
                    <td>
                      <a href={`/colleges/view/${similarCollege._id}`} style={{color: "blue"}}>
                        {similarCollege.name}
                      </a>
                    </td>

                    <td>{similarCollege.year}</td>
                    <td>{similarCollege.city}</td>
                    <td>{similarCollege.state}</td>
                    <td>{similarCollege.country}</td>
                    <td>{similarCollege.no_of_students}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default withRouter(CollegeDetails);
