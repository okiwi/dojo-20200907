
const calc = require('../app.js')
describe("Roman Addition", () => {
    test("add I and I", () => {
        // arrange - the calc import does it
        // act
        let result = calc.add("I", "I")
        // assert, or expect in this framework
        expect(result).toEqual("II");
      });
      test("add I and II", () => {
        // arrange - the calc import does it
        // act
        let result = calc.add("I", "II")
        // assert, or expect in this framework
        expect(result).toEqual("III");
      });

    });

