function selectionSort(arr) {
  for (let i=0; i < arr.length; i++) {
      const min = Math.min(...arr.slice(i,arr.length))
      arr[arr.findIndex(el => el === min)] = arr[i]
      arr[i] = min
  }
  return arr
}