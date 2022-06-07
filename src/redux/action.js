const getwallRecordInfluentialContributors = (dispatch, wallID, startDate, endDate, feedID, limit, postType) => {
    new HttpClient().get(`${API_GET_WALL_RECORD_INFLUENTIAL_CONTRIBUTORS}/${wallID}/${startDate}/${endDate}/${feedID}/0/${limit}/${postType}`).then((response) => {
        const { responseData } = response.data;
        dispatch({ type: GET_WALL_RECORD_INFLUENTIAL_CONTRIBUTORS, payload: responseData });
    })
        .catch((error) => {
            console.error("LAYOUT ISSUE", error)
        });
};

const getwallRecordMostActiveUsers = (dispatch, wallID, startDate, endDate, feedID, limit, postType) => {
    new HttpClient().get(`${API_GET_WALL_RECORD_MOST_ACTIVE_USERS}/${wallID}/${startDate}/${endDate}/${feedID}/0/${limit}/${postType}`).then((response) => {
        const { responseData } = response.data;
        dispatch({ type: GET_WALL_RECORD_MOST_ACTIVE_USERS, payload: responseData });
    })
        .catch((error) => {
            console.error("LAYOUT ISSUE", error)
        });
};