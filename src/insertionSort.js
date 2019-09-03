function insertionSort(arr) {
  for (let i = 1; i < arr.lentgh; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1, arr);
      j -= 1;
    }
  }
  return arr;
}

function swap(i, j, arr) {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}
