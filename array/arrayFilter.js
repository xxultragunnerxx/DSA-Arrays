function arrayFilter(arr, value) {
  let filteredArr = []
  arr.forEach(item => {
      if (item < value) {
          filteredArr.push(item)
      }
  })
  return filteredArr
}
