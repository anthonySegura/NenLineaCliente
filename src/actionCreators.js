import store from "./store";

const openModal = (tipo) => {
	return{
		type: "CONFIGURAR_SESION",
		tipoSesion: tipo
	}
};

const closeModal = () => {
	return{
		type: "CLOSE_MODAL"
	}
};

const iniciarJuego = (game_config, session_socket) => {
	return{
		type: "INICIAR_JUEGO",
		playing: true,
		game_config: game_config,
		session_socket: session_socket,
	}
};

// TODO: Poner un mensaje alertando al usuario que va a perder la partida
const cerrarJuego = () => {
	return{
		type: "CERRAR_JUEGO",
		playing: false,
		session_socket: null
	}
};

const login = (logged, user_info) => {
	return {
		type: "LOGIN",
		logged,
		user_info
	}
};

const sendMessage = msg => {
	return{
		type: "ADD_MESSAGE",
		message: msg
	}
};

const actualizarEstadoJuego = game_state => {
	return{
		type: "UPDATE_GAME",
		game_state
	}
};

const reiniciarTablero = estado => {
	if(estado){
		store.getState().game_state.game_state = 'Finish';
	}
	return{
		type: "RESTART",
		estado: estado
	}
};

const verPerfil = () => {
	return{
		type: "PROFILE"
	}
}

const verRanking = () => {
	return{
		type: "RANKING"
	}
}

const cerrarSesion = () => {
	window.localStorage.clear();
	window.sessionStorage.clear();
	return{
		type: "CLOSE_SESSION"
	}
}

export {
	iniciarJuego,
	cerrarJuego,
	login,
	sendMessage,
	actualizarEstadoJuego,
	openModal,
	closeModal,
	reiniciarTablero,
	verPerfil,
	verRanking,
	cerrarSesion
};