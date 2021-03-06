"use strict"

function unique_pred(list, compare, warn) {
  var ptr = 1
    , len = list.length
    , a = list[0], b = list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    } else if (warn) {
      warn(a)
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list, warn) {
  var ptr = 1
    , len = list.length
    , a = list[0], b = list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    } else if(warn) {
      warn(a)
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted, warn) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare, warn)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list, warn)
}

module.exports = unique
