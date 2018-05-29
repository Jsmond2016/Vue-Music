import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = '15'

function insertArray(arr, val, compare, maxLen) { // 保证后面插入的歌曲一定是在第一首的位置
    const index = arr.findIndex(compare)
    if (index === 0) {
      return
    }
    if (index > 0) {
      arr.splice(index, 1)
    }
    arr.unshift(val)
    if (maxLen && arr.length > maxLen) {
      arr.pop()
    }
}

function deleteFromArray(arr, compair) {
  const index = arr.findIndex(compair)
  if (index > -1) {
    arr.splice(index, 1)
  }
  // console.log(arr)
}

export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
  console.log(query)
  let ret = storage.get(SEARCH_KEY, [])
  deleteFromArray(ret, (item) => {
    return item === query
  })
  storage.set(SEARCH_KEY, ret)
  return ret
}