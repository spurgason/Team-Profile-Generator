const Employee = require("../lib/Employee")
const { test } = require("@jest/globals");

test("creates employee object", () => {
    const employee = new Employee ('James', 1234, 'shanepurgason.98@gmail.com' );

    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('shanepurgason.98@gmail.com');
    
});

test("gets employee name", () => {
    const employee = new Employee ('James', 1234, 'shanepurgason.98@gmail.com' );

    expect(employee.getName()).toEqual(employee.name);
});

test("gets employee id", () => {
    const employee = new Employee ('James', 1234, 'shanepurgason.98@gmail.com' );

    expect(employee.getID()).toEqual(expect.any(Number));
});

test("gets employee email", () => {
    const employee = new Employee ('James', 1234, 'shanepurgason.98@gmail.com' );

    expect(employee.getEmail()).toEqual(employee.email);
});

test("gets employee role", () => {
    const employee = new Employee ('James', 1234, 'shanepurgason.98@gmail.com' );

    expect(employee.getRole()).toEqual('Employee');
});





