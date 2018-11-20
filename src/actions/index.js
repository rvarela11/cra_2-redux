export const GET_ALL_DATA = 'GET_ALL_DATA';
export function getAllData(apiData) {
    return {
        type: GET_ALL_DATA,
        payload: apiData
    };
}
