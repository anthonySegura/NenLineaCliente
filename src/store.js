import {createStore} from 'redux';

const reducer = (state, action) => {
	if(action.type === "INICIAR_JUEGO"){
		return{
			...state,
			playing: true,
			game_config: action.game_config,
			session_socket: action.session_socket,
			messages: [],
			openModal: false
		}
	}
	else if(action.type === "CONFIGURAR_SESION"){
		return{
			...state,
			openModal: true,
			tipoSesion: action.tipo
		}
	}
	else if(action.type ===  "CLOSE_MODAL"){
		return{
			...state,
			openModal: false
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
	else if(action.type === 'SET_RIVAL'){
		return{
			...state,
			game_config: action.game_config
		}
	}
}

export default createStore(reducer, {playing: false, logged: false, user_info: [],session_socket: null , messages: []});