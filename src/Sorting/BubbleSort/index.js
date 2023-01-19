export default function bubbleSort (elems) {
  const result = [...elems];
  let should_continue = true;
  while (should_continue) {
    should_continue = false;
    for (let i = 1; i < result.length; i++) {
      if (result[i] < result[i - 1]) {
        [result[i], result[i - 1]] = [result[i - 1], result[i]];
        should_continue = true;
      }
    }
  }
  return result;
};