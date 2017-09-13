const iniciarJuego = (game_config, session_socket) => {
	return{
		type: "INICIAR_JUEGO",
		playing: true,
		game_config: game_config,
		session_socket: session_socket
	}
};

// TODO: Poner un mensaje alertando al usuario que va a perder la partida
const cerrarJuego = () => {
	return{
		type: "CERRAR_JUEGO",
		playing: false
	}
};

const login = logged => {
	return {
		type: "LOGIN",
		logged
	}
};

const sendMessage = msg => {
	return{
		type: "ADD_MESSAGE",
		message: msg
	}
}

export {iniciarJuego, cerrarJuego, login, sendMessage};