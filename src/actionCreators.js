const iniciarJuego = (playing, game_config) => {
	return{
		type: "INICIAR_JUEGO",
		playing,
		game_config
	}
};

const cerrarJuego = playing => {
	return{
		type: "CERRAR_JUEGO",
		playing
	}
};

const login = logged => {
	return {
		type: "LOGIN",
		logged
	}
};

export {iniciarJuego, cerrarJuego, login};