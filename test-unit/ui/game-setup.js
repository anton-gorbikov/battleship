'use strict';

let gameSetup = require('../../src-ui/javascript/game-setup');
let constants = require('../../src-common/constants');

describe('Game setup', function() {
	let constantsBackup = {};

	beforeEach(() => {
		Object.keys(constants).forEach(property => {
			constantsBackup[property] = constants[property];
		});
	});

	afterEach(() => {
		Object.keys(constants).forEach(property => {
			constants[property] = constantsBackup[property];
		});
	});

	it('should create a field of appropriate size', () => {
		const expectedFieldSize = 5;

		constants.FieldSize = expectedFieldSize;

		let field = gameSetup._createField();

		expect(field.length).toBe(expectedFieldSize);
		field.forEach(row => {
			expect(row.length).toBe(expectedFieldSize);
		});
	});
});
