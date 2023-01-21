import SortingOrder from "../SortingOrder.js";

export default function bubbleSort(elems, sortingOrder = SortingOrder.ASCENDING, comparator = (a, b) => a - b) {
  const result = [...elems];
  const isOrdered = sortingOrder;
  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      const comparatorResult = comparator(result[i], result[j]);
      if (!isOrdered(comparatorResult)) {
        [result[i], result[j]] = [result[j], result[i]];        
      }
    }
  }
  return result;
};