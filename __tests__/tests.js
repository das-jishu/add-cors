const utils = require("./../utils.js");

test('Testing ValidateURL: http://www.example.com/', () => {
    expect(utils.validateURL("http://www.example.com/")).toBeTruthy();
});

test('Testing ValidateURL: https://www.example.com/', () => {
    expect(utils.validateURL("https://www.example.com/")).toBeTruthy();
});

test('Testing ValidateURL: www.example.com/', () => {
    expect(utils.validateURL("www.example.com/")).toBeTruthy();
});

test('Testing ValidateURL: example.com', () => {
    expect(utils.validateURL("example.com")).toBeTruthy();
});

test('Testing ValidateURL: example', () => {
    expect(utils.validateURL("example")).toBeFalsy();
});

test('Testing failure of Fetch with invalid API', () => {
    expect.assertions(1);
    return utils.fetchData('https://www.google.com').catch(e => {
        expect(e.type).toBe("invalid-json")
    });
});

test('Testing success of Fetch with valid API', async () => {
    const data = await utils.fetchData("https://api.artic.edu/api/v1/artworks/129884");
    expect(data).toStrictEqual(expect.anything());
});