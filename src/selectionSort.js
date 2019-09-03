function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[i] !== arr[min]) {
      [arr[i] = arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

function swap(arr, i, j) {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}
