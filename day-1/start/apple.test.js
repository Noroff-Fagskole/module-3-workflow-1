import apple from "./apple";

// describe is used for group statements
// describe("My apple", () => {
//     it("is red and juicy", () => {
//         expect(apple.color).toEqual("red");
//         expect(apple.texture).toEqual("juicy");
//     });

//     it("is delicious", () => {
//         expect(apple.rating).toBeGreaterThan(6);
//     });

//     it("is vegan friendly", () => {
//         expect(apple.animalProduct).not.toBeTruthy();
//     });
// });

describe("My apple", ()=> {
    // is the apple juice
    test("is this apple juicy", () => {
        expect(apple.texture).toEqual("juicy");
    });

    // is my apple red
    test("is my apple red", () => {
        expect(apple.color).toEqual("red");
    }); 

    // is my
    test("is apple delicious", () => {
        expect(apple.rating).toBeGreaterThan(5);
    });

    // is my apple imported 
    test("is my apple imported", () => {
        expect(apple.isImported).toBeTruthy();
    });
})