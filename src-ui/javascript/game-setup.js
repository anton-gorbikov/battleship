'use strict';

// TODO: As for now that's fine. Consider to move into shared resources between server and client.
const FieldSize = 10;
let FieldState = {
	Empty: 0,
	Deck: 1,
	Miss: 2,
	Dead: 3
};

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
	let k = position.column;

	field[r][k] = field[r][k] === FieldState.Empty ? FieldState.Deck : FieldState.Empty;
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
