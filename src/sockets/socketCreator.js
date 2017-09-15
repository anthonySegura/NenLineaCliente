import Cable from 'actioncable';

const base_url = 'ws://localhost:3001/cable';
//  ws://nenlinea-rails.herokuapp.com/cable

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

function joinSession(onReceived, sesion_id, user){
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
			onReceived(data);
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


function newSession(onReceived, game_config, user) {
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
			onReceived(data);
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

export {sesionListener, joinSession, newSession};