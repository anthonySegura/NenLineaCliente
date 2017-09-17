import Cable from 'actioncable';
import store from '../store';
import {sendMessage, actualizarEstadoJuego} from "../actionCreators";
import soundMessage from './recibido.mp3';

const base_url = 'ws://localhost:3001/cable';
const messageNotification = new Audio(soundMessage);

function sesionListener(onReceived){
	let cable = Cable.createConsumer(base_url);
	let sesion = cable.subscriptions.create({
		channel: 'SesionesEnEsperaChannel'
	}, {
		connected: () => {
			console.log('Recibiendo datos desde SesionesEnEsperaChannel');
		},
		received: (data) => {
			onReceived(data);
		}
	});
}

function joinSession(sesion_id, user){
	let cable = Cable.createConsumer(base_url);
	var sesion = cable.subscriptions.create({
			channel: 'SesionChannel',
			sesion_id: sesion_id,
			command: 'join',
			user: user
	}, {
		connected: () => {
			console.log('Conexion de invitado a la sesion');
		},
		received: (data) => {
			console.log(data);
			if(data.action === 'message'){
				store.dispatch(sendMessage(data));
				playMessageSound(data);
			}
			else if(data.action === 'Mover'){
				console.log("Actualizando el tablero");
				console.log(data);
				store.dispatch(actualizarEstadoJuego(data));
			}
			else if(data.action === 'Nueva Partida'){
				store.dispatch(actualizarEstadoJuego(data));
			}
		},
		mover: function (columna) {
			this.perform('mover', {
				columna: columna
			});
		},
		enviarMensaje: function (message, name) {
			console.log('Enviando mensaje');
			this.perform('enviarMensaje',{
				message: message,
				send_by: name
			});
		}
	});
	return sesion
}


function newSession(game_config, user) {
	let cable = Cable.createConsumer(base_url);
	let sesion = cable.subscriptions.create({
			channel: 'SesionChannel',
			// FIXME: cambiar por el nombre del usuario
			user_id: user,
			command: 'new',
			user: user,
			tamFila: game_config.tamFila,
			tamTablero: game_config.tamTablero,
			n2win: game_config.n2win,
			n_partidas: game_config.n_partidas,
			tipo: game_config.tipo
	}, {
		connected: () => {
			console.log('Nueva sesion. Recibiendo datos');
		},
		received: (data) => {
			console.log(data);
			if(data.action === 'message'){
				store.dispatch(sendMessage(data));
				playMessageSound(data);
			}
			else if(data.action === 'Mover'){
				store.dispatch(actualizarEstadoJuego(data));
			}
			else if(data.action === 'Nueva Partida'){
				store.dispatch(actualizarEstadoJuego(data));
			}
		},
		crearSesion: function(rowSize, nToWin){
			this.perform('nuevaSesion', {
				tamFila: rowSize,
				tamTablero:  rowSize * rowSize,
				n2win: nToWin
			});
		},
		mover: function (columna) {
			this.perform('mover', {
				columna: columna
			});
		},
		enviarMensaje: function (message, name) {
			this.perform('enviarMensaje',{
				message: message,
				send_by: name
			});
		}
	});
	return sesion;
}

function sessionIA(game_config, user){
	let cable = Cable.createConsumer(base_url);
	let sesion = cable.subscriptions.create({
		channel: 'SesionChannel',
		// FIXME: cambiar por el nombre del usuario
		user_id: user,
		command: 'IA',
		user: user,
		tamFila: game_config.tamFila,
		tamTablero: game_config.tamTablero,
		n2win: game_config.n2win,
		n_partidas: game_config.n_partidas,
		tipo: game_config.tipo
	}, {
		connected: () => {
			console.log('Nueva sesion. Recibiendo datos');
		},
		received: (data) => {
			console.log(data);
			if(data.action === 'message'){
				store.dispatch(sendMessage(data));
				playMessageSound(data);
			}
			else if(data.action === 'Mover'){
				store.dispatch(actualizarEstadoJuego(data));
			}
			else if(data.action === 'Nueva Partida'){
				store.dispatch(actualizarEstadoJuego(data));
			}
		},
		mover: function (columna) {
			this.perform('moverIA', {
				columna: columna
			});
		},
		enviarMensaje: function (message, name) {
			this.perform('enviarMensaje',{
				message: message,
				send_by: name
			});
		}
	});
	return sesion;
}

function playMessageSound(data){
	let user = store.getState().user_info.nombre;
	if(data.send_by !== user){
		messageNotification.play();
	}
}

export {sesionListener, joinSession, newSession, sessionIA};