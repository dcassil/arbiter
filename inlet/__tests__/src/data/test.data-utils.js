const dataUtils = require('../../../src/data/data-utils.js');

describe('data-utils', () => {

	it('GET /test should return test content', () => {
		let testData = dataUtils.getCollectionDataByName('test');
		
		expect(JSON.stringify(testData)).toBe(JSON.stringify(["test1", "test2", "test3"]));
	});
});
