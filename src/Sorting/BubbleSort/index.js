import SortingOrder from "../SortingOrder";

function bubbleSort(elems, comparator = (a, b) => a - b, sortingOrder = SortingOrder.ASCENDING) {
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


export { bubbleSort }