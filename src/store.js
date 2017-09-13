import {createStore} from 'redux';

const reducer = (state, action) => {
	if(action.type === "INICIAR_JUEGO"){
		return{
			...state,
			playing: true,
			game_config: action.game_config,
			session_socket: action.session_socket
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
	else if(action.type === "ADD_MESSAGE"){
		return{
			...state,
			messages: state.messages.concat(action.message)
		}
	}
}

export default createStore(reducer, {playing: false, logged: false, session_socket: null ,messages: []});