'use strict';

let gameSetup = require('../../src-ui/javascript/game-setup');
let fakeFieldMarkup = require('./fixtures/fakeField.html');

function createFakeField() {
	let root = document.createElement('div');

	root.innerHTML = fakeFieldMarkup;

	return root;
}

describe('Game setup', () => {
	it('"createField" should create a field of appropriate size.', () => {
		const expectedFieldSize = 5;

		let field = gameSetup._createField(expectedFieldSize);

		expect(field.length).toBe(expectedFieldSize);
		field.forEach(row => {
			expect(row.length).toBe(expectedFieldSize);
		});
	});

	it('"getPosition" should return correct position for first line.', () => {
		let expectedRow = 0,
			expectedColumn = 2,
			id = '#test1';

		let node = createFakeField().querySelector(id);
		let position = gameSetup._getPosition({ target: node });

		expect(position.row).toBe(expectedRow);
		expect(position.column).toBe(expectedColumn);
	});

	it('"getPosition" should return correct position for second line.', () => {
		let expectedRow = 1,
			expectedColumn = 4,
			id = '#test2';

		let node = createFakeField().querySelector(id);
		let position = gameSetup._getPosition({ target: node });

		expect(position.row).toBe(expectedRow);
		expect(position.column).toBe(expectedColumn);
	});

	it('"getPosition" should return null in case of non-cell event.', () => {
		let id = '#test3';

		let node = createFakeField().querySelector(id);
		let position = gameSetup._getPosition({ target: node });

		expect(position).toBe(null);
	});

	it('"cloneField" should exact copy of the original field.', () => {
		let field = [
			[0, 1, 2],
			[2, 1, 0],
			[1, 1, 1]
		];

		let newField = gameSetup._cloneField(field);

		newField.forEach((row, i) => {
			row.forEach((col, j) => {
				expect(col).toBe(field[i][j]);
			});
		});
	});

	it('"cloneField" should create new objects and not reference old.', () => {
		let field = [
			[0, 1, 2],
			[2, 1, 0],
			[1, 1, 1]
		];

		let newField = gameSetup._cloneField(field);

		expect(newField).not.toBe(field);
		expect(newField[0]).not.toBe(field[0]);
		expect(newField[1]).not.toBe(field[1]);
		expect(newField[2]).not.toBe(field[2]);
	});
});
