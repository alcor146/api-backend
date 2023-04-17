
const frisby = require('frisby');

describe("Test suite", () => {
    test('afiseaza toate produsele', () => {
        return frisby.get(`http://localhost:3001/api/products`)
            .expect('status', 200)
    });

    test('creeaza adresa de livrare', () => {
        return frisby.post(`http://localhost:3001/api/locations`, {
            "createdBy": "aurel.ristoiu@yahoo.ro",
            "county": "Bacau1",
            "town": "Onesti11",
            "address": "adresa 12312",
        })
            .expect('status', 200)
    });

    test('sterge card de credit', () => {
        return frisby.delete(`http://localhost:3001/api/cards/643be2944332f606e78c219a`)
            .expect('status', 200)
    });

    test('login realizat corect', () => {
        return frisby.post(`http://localhost:3003/api/login`, {
            email: 'aurel.ristoiu@yahoo.ro',
            password: '123'
        })
            .expect('status', 200)
    });

    test('login cu parola gresita', () => {
        return frisby.post(`http://localhost:3003/api/login`, {
            email: 'aurel.ristoiu@yahoo.ro',
            password: '345'
        })
            .expect('status', 404)
    });

    test('inregistrare cont cu email deja folosit', () => {
        return frisby.post(`http://localhost:3003/api/register`, {
            name: "Aurel Ristoiu",
            phoneNumber: "0731365677",
            email: "aurel.ristoiu@yahoo.ro",
            password: "123",
            passwordConfirmation: "123"
        })
            .expect('status', 420)
    });

    test('resetare parola pentru cont inexistent', () => {
        return frisby.post(`http://localhost:3003/api/changePassword`, {
            email: 'testttt@yahoo.ro',
            password: '123'
        })
            .expect('status', 404)
    });




});

export { };