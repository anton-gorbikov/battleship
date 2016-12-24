'use strict';

let constants = require('../../src-common/constants');
let fieldView = require('./field-view');

let field = createField(constants.FieldSize, constants.FieldState.Empty);

function createField(size, defaultState) {
	let newField = [];

	for (let i = 0; i < size; ++i) {
		newField.push([]);

		for (let j = 0; j < size; ++j) {
			newField[i].push(defaultState);
		}
	}

	return newField;
}

function cloneField(field) {
	let newField = [];

	for (let i = 0; i < field.length; ++i) {
		newField.push([]);

		for (let j = 0; j < field[i].length; ++j) {
			newField[i].push(field[i][j]);
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
		field = createField(constants.FieldSize, constants.FieldState.Empty);
	},
	_toggleShipDeck: toggleShipDeck,
	_getPosition: getPosition,
	_createField: createField,
	_cloneField: cloneField
};
