
const calc = require('../app.js')
describe("Roman Addition", () => {
    test("add not implemented", () => {
        // arrange - the calc import does it
        // act
        let result = calc.add()
        // assert, or expect in this framework
        expect(result).toEqual(42);
      });
  });

