export function getCollegeDetails(collegeId) {
    const getCollegeDetailsApiEndpoint = "https://smmziaul-col-app.herokuapp.com/api/college/" + collegeId;
    return fetch(getCollegeDetailsApiEndpoint)
        .then(data => data.json())
}