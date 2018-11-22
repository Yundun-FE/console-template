// 用于图表数据最大值推荐
export function markMax(arr, size, add = 0) {
  arr = arr.filter(_ => _ > 0)
  let max = Math.max(...arr)
  max = Math.ceil(max / size) * size + size * add

  return max || undefined
}

export function compare(property) {
  return function(a, b) {
    const value1 = a[property]
    const value2 = b[property]
    return value1 - value2
  }
}

export function maxSection(value, list = [5, 20, 50, 100, 200, 500, 1000]) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (value < item) {
      return item
    }
  }
  return value
}

export function maxFormat(value, size, add = 0) {
  value = Math.ceil(value / size) * size + size * add
  return value || undefined
}

// 判断是否是数组
export function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

export function vPagination(arr, page, size) {
  const start = (page - 1) * size
  const end = page * size
  return arr.slice(start, end)
}

// 判断数组中是否有重复值
export function isRepeat(arr) {
  if (!isArray(arr)) {
    console.warn('[arr] must be array')
    return
  }
  const set = new Set(arr)
  return set.size !== arr.length
}

// 数组正则判断
export function arrTest(arr, reg, split) {
  if (split) arr = arr.split(',')
  if (!isArray(arr)) {
    console.warn('[arr] must be array')
    return
  }
  let ret = true
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (!reg.test(item)) {
      ret = false
    }
  }
  return ret
}

// 数组中的布尔转数字
export function arrBooleanToNumber(obj) {
  for (const k in obj) {
    obj[k] = obj[k] ? 1 : 0
  }
  return obj
}

// 数组转排序对象
export function arrToSortObj(arr) {
  const obj = {}
  let i = 0
  arr.forEach(item => {
    obj[item] = i
    i++
  })
  return obj
}

// label 转 array value
export function arrLabelToValue(arr, list, split = '|') {
  if (typeof arr === 'string') {
    arr = arr.split('|')
  }

  const nArr = arr.map(item => {
    return list.find(_ => _.label === item).value
  })

  return nArr
}

export function arrRemove(arr, item) {
  const index = arr.indexOf(item)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

export function createArr(length) {
  return Array.from(
    {
      length
    },
    (v, k) => k
  )
}

export function arrayIsEqual(arr1, arr2) {
  // 判断2个数组是否相等
  if (arr1 === arr2) {
    return true
  } else {
    if (arr1.length !== arr2.length) {
      return false
    } else {
      // 长度相同
      for (const i in arr1) {
        if (arr1[i] !== arr2[i]) {
          return false
        }
      }
      return true
    }
  }
}

export function arrayDedupe(array) {
  return Array.from(new Set(array))
}
