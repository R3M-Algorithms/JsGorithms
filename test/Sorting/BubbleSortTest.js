import bubbleSort from "../../src/Sorting/BubbleSort/index.js"
import { expect } from "chai"



[0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
  .forEach((elemCount) => {
    describe(`BubbleSort`, () => {
      it(`Should Sort When array has ${elemCount} element(s)`, () => {
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