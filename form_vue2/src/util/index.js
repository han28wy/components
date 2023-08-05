
export const caculateLength = (value) => {
  if (typeof value === 'string') {
    return value.length
  }
  if (typeof value === 'number') {
    return value.toString().length
  }
  if (typeof value === 'object') {
    return Object.keys(value).length
  }
}
