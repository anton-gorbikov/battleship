'use strict';

let FieldState = require('../../src-common/constants').FieldState;

function updateStateToEmpty(cell) {
	cell.classList.remove('dead');
	cell.classList.remove('deck');
	cell.classList.remove('miss');
}

function updateStateToDead(cell) {
	cell.classList.add('dead');
}

function updateStateToDeck(cell) {
	cell.classList.add('deck');
}

function updateStateToMiss(cell) {
	cell.classList.add('dead');
}

function updateClassNames(cell, state) {
	let updateState = {};

	updateState[FieldState.Empty] = updateStateToEmpty;
	updateState[FieldState.Dead] = updateStateToDead;
	updateState[FieldState.Deck] = updateStateToDeck;
	updateState[FieldState.Miss] = updateStateToMiss;

	updateState[state](cell);
}

module.exports = {
	render: (fieldContainer, field) => {
		fieldContainer.querySelectorAll('tr').forEach((row, i) => {
			row.querySelectorAll('td').forEach((column, j) => {
				updateClassNames(column, field[i][j]);
			});
		});
	},
	reset: fieldContainer => {
		fieldContainer.querySelectorAll('tr').forEach(row => {
			row.querySelectorAll('td').forEach(column => {
				updateStateToEmpty(column);
			});
		});
	}
};
