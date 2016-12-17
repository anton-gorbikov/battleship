'use strict';

let constants = require('../../src-common/constants');
const FieldSize = constants.FieldSize;
let FieldState = constants.FieldState;

let field = resetField();

function resetField() {
	let newField = [];

	for (let i = 0; i < FieldSize; ++i) {
		newField.push([]);

		for (let j = 0; j < FieldSize; ++j) {
			newField[i].push(FieldState.Empty);
		}
	}
}

function getPosition(event) {
	let targetColumn = event.target;
	let targetRow = targetColumn.parentNode;

	let column = Array.prototype.indexOf.call(targetRow.children, targetColumn);
	let row = Array.prototype.indexOf.call(targetRow.parentNode.children, targetRow);

	return {
		row: row,
		column: column
	};
}

function toggleShipDeck(event) {
	let position = getPosition(event);
	let r = position.row;
	let c = position.column;

	field[r][c] = field[r][c] === FieldState.Empty ? FieldState.Deck : FieldState.Empty;
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
		field = resetField();
	}
};
