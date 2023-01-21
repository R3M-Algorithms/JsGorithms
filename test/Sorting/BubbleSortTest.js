import bubbleSort from "../../src/Sorting/BubbleSort/index.js"
import { expect } from "chai"
import SortingOrder from "../../src/Sorting/SortingOrder.js";

[0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
  .forEach((elemCount) => {
    describe(`BubbleSort`, () => {
      it(`Should Sort Ascending as default When array has ${elemCount} element(s)`, () => {
        // Arrange
        const numbers = [...Array(elemCount).keys()].sort(() => .5 - Math.random());

        // Act
        const result = bubbleSort(numbers);

        // Assert
        expect(result).lengthOf(elemCount);
        expect(result.every((x, i) => i === 0 || x >= result[i - 1])).to.be.true;
      });
    });
  });

  [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
  .forEach((elemCount) => {
    describe(`BubbleSort`, () => {
      it(`Should Sort Ascending When array has ${elemCount} element(s)`, () => {
        // Arrange
        const numbers = [...Array(elemCount).keys()].sort(() => .5 - Math.random());

        // Act
        const result = bubbleSort(numbers, SortingOrder.ASCENDING);

        // Assert
        expect(result).lengthOf(elemCount);
        expect(result.every((x, i) => i === 0 || x >= result[i - 1])).to.be.true;
      });
    });
  });

  [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
  .forEach((elemCount) => {
    describe(`BubbleSort`, () => {
      it(`Should Sort Descending When array has ${elemCount} element(s)`, () => {
        // Arrange
        const numbers = [...Array(elemCount).keys()].sort(() => .5 - Math.random());

        // Act
        const result = bubbleSort(numbers, SortingOrder.DESCENDING);

        // Assert
        expect(result).lengthOf(elemCount);
        expect(result.every((x, i) => i === 0 || x <= result[i - 1])).to.be.true;
      });
    });
  });

  [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
  .forEach((elemCount) => {
    describe(`BubbleSort`, () => {
      it(`Should Sort Ascending When array has ${elemCount} complex element(s)`, () => {
        // Arrange
        const numbers = Array.from({length: elemCount}, u => ({age: 1 + Math.trunc(Math.random() * 100)}))

        // Act
        const result = bubbleSort(numbers, SortingOrder.ASCENDING, (a, b) => a.age - b.age);

        // Assert
        expect(result).lengthOf(elemCount);
        expect(result.every((x, i) => i === 0 || x >= result[i - 1])).to.be.true;
      });
    });
  });

  [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
  .forEach((elemCount) => {
    describe(`BubbleSort`, () => {
      it(`Should Sort Descending When array has ${elemCount} complex element(s)`, () => {
        // Arrange
        const numbers = Array.from({length: elemCount}, u => ({age: 1 + Math.trunc(Math.random() * 100)}))

        // Act
        const result = bubbleSort(numbers, SortingOrder.DESCENDING, (a, b) => a.age - b.age);

        // Assert
        expect(result).lengthOf(elemCount);
        expect(result.every((x, i) => i === 0 || x <= result[i - 1])).to.be.true;
      });
    });
  });