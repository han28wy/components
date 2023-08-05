
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

export function getPropByPath (obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
};

export function dispatch (componentName, eventName, params) {
  var parent = this.$parent || this.$root
  var name = parent.$options.componentName

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent

    if (parent) {
      name = parent.$options.componentName
    }
  }
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}
export function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
