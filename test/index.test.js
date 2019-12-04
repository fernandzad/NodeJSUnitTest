const testing = require('../index');

describe('Operaciones matemáticas', () => {
    test('Realizamos la suma', () => {
        expect(testing.sumar(1,1)).toBe(2);
    });
    test('Realizamos la resta', () => {
        expect(testing.restar(1,1)).toBe(0);
    });
    test('Realizamos la multiplicacion', () => {
        expect(testing.multiplicar(1,1)).toBe(1);
    });
    test('Realizamos la division', () => {
        expect(testing.dividir(1,1)).toBe(1);
    });
});