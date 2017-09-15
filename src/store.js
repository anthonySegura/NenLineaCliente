import {createStore} from 'redux';

const reducer = (state, action) => {
	if(action.type === "INICIAR_JUEGO"){
		return{
			...state,
			playing: true,
			game_config: action.game_config,
			session_socket: action.session_socket,
			messages: []
		}
	}
	else if(action.type === "CERRAR_JUEGO"){
		return{
			...state,
			playing: false,
			session_socket: null,
			messages: []
		}
	}
	else if(action.type === "LOGIN"){
		return{
			...state,
			logged: action.logged,
			user_info: action.user_info
		}
	}
	else if(action.type === "ADD_MESSAGE"){
		return{
			...state,
			messages: state.messages.concat(action.message)
		}
	}
	else if(action.type === "UPDATE_GAME"){
		return{
			...state,
			game_state: action.game_state
		}
	}
}

export default createStore(reducer, {playing: false, logged: false, user_info: [],session_socket: null , messages: []});