const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Pera Peric';
        const text = 'Pomaze Bog!';
        const message = generateMessage(from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
    });
});


describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        const from = 'Pera Peric';
        const latitude = 111;
        const longitude = 222;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = generateLocationMessage(from, latitude, longitude);
        expect(message.from).toBe(from);
        expect(message.url).toBe(url);
        expect(typeof message.createdAt).toBe('number');
    });
});