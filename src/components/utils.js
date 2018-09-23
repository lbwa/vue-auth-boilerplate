function isNumber (value) {
  return typeof value === 'number'
}

function formatPrice (price) {
  if (!isNumber(price)) throw TypeError('[formatPrice]: parameter price should be a number')

  return price.toLocaleString('zh', {
    style: 'currency',
    currency: 'CNY'
  })
}

export {
  isNumber,
  formatPrice
}
