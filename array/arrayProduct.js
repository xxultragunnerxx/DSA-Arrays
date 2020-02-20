function arrayProduct(arr) {
  const product = arr.map((num, i) => {
      const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)))
      return otherNums.reduce((acc, cur) => acc * cur)
  })
  return product
}
