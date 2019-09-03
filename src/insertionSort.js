function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const pos = arr.findIndex(el => el > current);
    arr.splice(i, 1);
    arr.splice(pos, 0, current);
  }
  return arr;
}
