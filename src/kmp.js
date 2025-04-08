// 朴素模式匹配算法
function patternMtching(params, str) {
  let i = 0,
    j = 0

  console.log(`output->params, str`, params, str)
  while (i < params.length && j < str.length) {
    if (params[i] === str[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }

  if (j >= str.length) return i - str.length
  else return 0
}

const strs = 'abababc'

console.log(`output->方法'`, patternMtching(strs, 'abc'))

// kmp next
function kmp(demo, str) {
  let i = 0,
    j = 0
  const next = [0, 0, 0]
  while (i < demo.length && j < str.length) {
    if (j === 0 || demo[i] === str[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }

  if (j >= str.length) return i - str.length
  else return 0
}

console.log(`output->方法'`, kmp(strs, 'ab'))
