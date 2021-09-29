export function getCollegeList() {
    const getCollegeListApiEndpoint = "https://smmziaul-col-app.herokuapp.com/api/colleges"
    return fetch(getCollegeListApiEndpoint)
        .then(data => data.json())
}