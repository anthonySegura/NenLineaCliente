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

export {sesionListener};