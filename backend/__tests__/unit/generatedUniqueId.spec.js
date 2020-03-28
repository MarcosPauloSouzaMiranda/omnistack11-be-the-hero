const generatedUniqueId = require('../../src/utils/generatedUniqueId');

describe('Generated Unique Id', () => {
  it('should generate an unique id', () => {
    const id = generatedUniqueId();

    expect(id).toHaveLength(8);
  })
});