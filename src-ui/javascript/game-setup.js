'use strict';

let constants = require('../../src-common/constants');
let fieldView = require('./field-view');

let field = createField();

function createField() {
	let newField = [];

	for (let i = 0; i < constants.FieldSize; ++i) {
		newField.push([]);

		for (let j = 0; j < constants.FieldSize; ++j) {
			newField[i].push(constants.FieldState.Empty);
		}
	}

	return newField;
}

function getPosition(event) {
	let result = null;

	if (event.target.tagName === 'TD') {
		let targetColumn = event.target;
		let targetRow = targetColumn.parentNode;

		let column = Array.prototype.indexOf.call(targetRow.children, targetColumn);
		let row = Array.prototype.indexOf.call(targetRow.parentNode.children, targetRow);

		result = {
			row: row,
			column: column
		};
	}

	return result;
}

function toggleShipDeck(event) {
	let position = getPosition(event);

	if (position) {
		let r = position.row;
		let c = position.column;

		field[r][c] = field[r][c] === constants.FieldState.Empty ? constants.FieldState.Deck : constants.FieldState.Empty;

		fieldView.render(document.getElementById('client'), field);
	}
}

function listenToFieldConfiguration() {
	let clientField = document.getElementById('client');

	clientField.addEventListener('click', toggleShipDeck);
}

module.exports = {
	startGame: () => {
		listenToFieldConfiguration();
	},
	restart: () => {
		field = createField();
	},
	_toggleShipDeck: toggleShipDeck,
	_getPosition: getPosition,
	_createField: createField
};
