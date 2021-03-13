import http from "../../Screens/Utils/http"

const KEY = 'DNRpZReOc5khTg6fPwUFgI2ltmwxu2NH8U9wPL0z';

export const getAsteroidDetails = (input: string) => (dispatch: any) => {
	return http.get(`neo/${input}?api_key=${KEY}`)
	.then(res => {
		dispatch({type: 'SET_ASTEROID', payload: res.data});
	})
	.catch(err => {
		alert(err);
	})
}

export const getRandomAstroid = () => (dispatch: any) => {
	return http.get(`neo/browse?api_key=${KEY}`)
	.then(resp => {
		const randomId  = resp.data.near_earth_objects[Math.floor(Math.random()*resp.data.near_earth_objects.length)].id;
		http.get(`neo/${randomId}?api_key=${KEY}`)
		.then(response => {
			dispatch({type: 'SET_ASTEROID', payload: response.data})
		})
		.catch(err => {
			alert(err);
		})
	})
	.catch(error => {
		alert(error);
	})
}