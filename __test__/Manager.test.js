const Manager = require('../lib/Manager')

test('creates manager object' , () => {
    const manager = new Manager ('James', 12, 'spurgason.98@gmail.com', 1)

    expect(manager.office).toEqual(expect.any(Number))
});

test("gets manager role", () => {
    const manager = new Manager ('James', 12, 'spurgason.98@gmail.com', 1)
    
    expect(manager.getRole()).toEqual('Manager');
});