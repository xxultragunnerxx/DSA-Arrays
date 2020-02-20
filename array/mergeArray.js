function mergeArray(arr1, arr2) {
  const newArr = Array.from(arr1)
  arr2.forEach((num) => {
      let i = 0
      while(i < newArr.length) {
          if(num <= newArr[i]) {
              newArr.splice(i, 0, num)
              break
          }
          i++
      }
  })
  return newArr
}
