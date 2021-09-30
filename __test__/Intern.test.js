const Intern = require('../lib/Intern');

test("gets intern object", () => {
    const intern = new Intern('James', 12, 'spurgason.98@gmail.com', 'UNCW');

    expect(intern.school).toEqual('UNCW');
});
 
test("gets school", () => {
    const intern = new Intern('James', 12, 'spurgason.98@gmail.com', 'UNCW');

    expect(intern.getSchool()).toEqual(intern.school);
});
 
test("gets role", () => {
    const intern = new Intern('James', 12, 'spurgason.98@gmail.com', 'UNCW');

    expect(intern.getRole()).toEqual('Intern');
});
 