import {createStore} from 'redux';

let initial_state = {
	playing: false,
	logged: false,
	user_info: [],
	session_socket: null,
	messages: [],
	tipoSesion: '',
	restart: false,
	view: 'main'
};

const reducer = (state, action) => {
	if(action.type === "INICIAR_JUEGO"){
		return{
			...state,
			playing: true,
			game_config: action.game_config,
			session_socket: action.session_socket,
			messages: [],
			openModal: false,
			restart: false
		}
	}
	else if(action.type === "CONFIGURAR_SESION"){
		return{
			...state,
			openModal: true,
			tipoSesion: action.tipoSesion
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
			view: 'main',
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
	else if(action.type === 'RESTART'){
		return{
			...state,
			restart: action.estado
		}
	}
	else if(action.type === 'PROFILE'){
		return{
			...state,
			view: 'profile'
		}
	}
	else if(action.type === 'RANKING'){
		return{
			...state,
			view: 'ranking'
		}
	}
	else if(action.type === 'CLOSE_SESSION'){
		return{
			...state,
			logged: false,
			view: 'main'
		}
	}
}

export default createStore(reducer, initial_state);