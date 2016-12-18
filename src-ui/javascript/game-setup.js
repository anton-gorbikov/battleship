'use strict';

let constants = require('../../src-common/constants');
let fieldView = require('./field-view');

const FieldSize = constants.FieldSize;
let FieldState = constants.FieldState;

let field = createField();

function createField() {
	let newField = [];

	for (let i = 0; i < FieldSize; ++i) {
		newField.push([]);

		for (let j = 0; j < FieldSize; ++j) {
			newField[i].push(FieldState.Empty);
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

		field[r][c] = field[r][c] === FieldState.Empty ? FieldState.Deck : FieldState.Empty;

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
	}
};
