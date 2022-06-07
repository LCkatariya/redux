export const IS_LIVE = false;
export const IS_LIVE_TEST = true;

export const HOST_URL = IS_LIVE_TEST ? `https://test.taggbox.com/` : `https://app.taggbox.com/`
export const APP_URL = IS_LIVE_TEST ? `https://test.taggbox.com/` : `https://app.taggbox.com/`
// export const GET_ANALYTICS_STATUS = `${API_URL}/analytics/getAnalytcialStatus`

export const API_GET_WALL_RECORD_MOST_ACTIVE_USERS = `${API_URL}/analytics/getwallRecordMostActiveUsers`

export const API_GET_WALL_RECORD_INFLUENTIAL_CONTRIBUTORS = `${API_URL}/analytics/getwallRecordInfluentialContributors`