function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i++) {
    let jMin = i;
    for (j = i; j < arr.length; j++) {
      if (arr[j] < arr[jMin]) {
        jMin = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[jMin];
    arr[jMin] = temp;
  }
}
