
const server_url = 'http://localhost:3001'

function registrarUsuario(user_data) {
	const query = `${server_url}/user/create/?name=${user_data.nombre}&email=${user_data.email}&nickname=${user_data.nombre}
															&password=${user_data.googleId}&puntuacion=0&categoria=1`;
	fetch(query,{method: 'post'})
		.then((resp) => resp.json())
		.then(function (data) {
			console.log('Usuario registrado');
		})
		.catch(function (error) {
			console.log(error);
		})
}

function validarUsuario(user_data) {
	console.log('Validando usuario');
	fetch(`${server_url}/user/show/?email=${user_data.email}`)
		.then((resp) => resp.json())
		.then(function (data) {
			console.log(data);
			sessionStorage.setItem('gameUserData', JSON.stringify(data));
			if(data.length === 0){
				console.log('Registrando usuario');
				registrarUsuario(user_data);
			}
		})
		.catch(function (error) {
			console.log(error);
		})
}

function getRanking(callback) {
	fetch(`${server_url}/ranking`)
		.then((resp) => resp.json())
		.then((data) => {
			callback(data);
		})
		.catch((error) => {
			console.log(error);
		})
}

function getUserScore(userName, callback) {
	fetch(`${server_url}/user/puntuacion/${userName}`)
		.then((resp) => resp.json())
		.then((data) => {
			callback(data);
		})
		.catch((error) => {
			console.log(error);
		})
}

export {validarUsuario, getRanking, getUserScore};