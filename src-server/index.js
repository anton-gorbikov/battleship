'use strict';

const PORT_NUMBER = 9001;

let express = require('express');

let app = express();

app.get('/game', function(request, response) {
	response.send('Game Over!');
});

app.use(express.static('src-ui'));

app.listen(PORT_NUMBER, function() {
	console.log('Server started!');
});