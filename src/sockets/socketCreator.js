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

function joinSession(onReceived, sesion_id){
	let cable = Cable.createConsumer(base_url);
	let sesion = cable.subscriptions.create({
		channel: 'SesionChannel', sesion_id: sesion_id, command: 'join'
	}, {
		connected: () => {
			console.log('conectado');
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
		getn2Win: function(name){
			this.perform('getn2Win',{
				id: name
			})
		},
		enviarMensaje: function (message) {
			console.log('Enviando mensaje');
			this.perform('enviarMensaje',{
				message: message
			});
		}
	});
	return sesion
}

// FIXME pasar los parametros del juego
function newSession(onReceived, game_config) {
	let cable = Cable.createConsumer(base_url);
	let sesion = cable.subscriptions.create({
		channel: 'SesionChannel', user_id: 'test update', command: 'new'
	}, {
		connected: () => {
			console.log('Nueva partida');
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
		enviarMensaje: function (message) {
			this.perform('enviarMensaje',{
				message: message
			});
		}
	});
	return sesion;
}

export {sesionListener, joinSession, newSession};