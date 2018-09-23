function isNumber (value) {
  return typeof value === 'number'
}

function formatPrice (price) {
  if (!isNumber(price)) throw TypeError('[formatPrice]: parameter price should be a number')

  return price.toLocaleString('zh', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 0
  })
}

function decimalNumber (num) {
  if (!isNumber(num)) throw TypeError('[decimalNumber]: parameter should be a number')
  return num.toLocaleString('zh', { style: 'decimal' })
}

export {
  isNumber,
  formatPrice,
  decimalNumber
}
