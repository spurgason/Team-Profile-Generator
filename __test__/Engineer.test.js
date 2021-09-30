const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer('James', 12, 'spurgason.98@gmail.com', 'spurgason');

    expect(engineer.github).toBe('spurgason');
});
  
test('gets github username', () => {
    const engineer = new Engineer('James', 12, 'spurgason.98@gmail.com', 'spurgason');

    expect(engineer.getGithub()).toEqual(engineer.github);
});
  
test('gets engineer role', () => {
    const engineer = new Engineer('James', 12, 'spurgason.98@gmail.com', 'spurgason');

    expect(engineer.getRole()).toEqual('Engineer')
});
  