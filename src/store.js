import {createStore} from 'redux';

const reducer = (state, action) => {
	if(action.type === "INICIAR_JUEGO"){
		return{
			...state,
			playing: true,
			game_config: action.game_config
		}
	}
	else if(action.type === "CERRAR_JUEGO"){
		return{
			...state,
			playing: false
		}
	}
	else if(action.type === "LOGIN"){
		return{
			...state,
			logged: action.logged
		}
	}
}

export default createStore(reducer, {playing: false, logged: false});