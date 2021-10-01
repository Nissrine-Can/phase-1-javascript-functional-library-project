function myEach(collection, callback) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)
    for (let i = 0; i < collectionArr.length; i++) { 
         callback(collectionArr[i], i, collectionArr);
    }
    return collection
}

function myMap(collection, callback) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)

    const newArray = []
    for (let i = 0; i < collectionArr.length; i++) { 
        const newElement = callback(collectionArr[i], i, collectionArr);
        newArray.push(newElement)
   }
   return newArray
}

function myReduce(collection, callback, acc) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)
let accumulator = acc || collectionArr[0];

for (let i = 0; i < collectionArr.length; i++) {
    if (i === 0 && !acc) {
        continue;
    }
    const reducedValue = callback(accumulator, collectionArr[i], i, collectionArr) 
          accumulator = reducedValue
}
 return accumulator
}


function myFind(collection, callback) {
    
const collectionArr = collection instanceof Array === true? collection : Object.values(collection)
let i = 0
 
let firstValueFound = collectionArr[i]
    while (i < collectionArr.length) { 
        firstValueFound = collectionArr[i]
        const truthyValue = callback(collectionArr[i], i, collectionArr);
        if (truthyValue) {
            return firstValueFound
            
        }
        i++
   }
}

function myFilter(collection, callback) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)

    const newArray = []
    for (let i = 0; i < collectionArr.length; i++) { 
        const truthyValue = callback(collectionArr[i], i, collectionArr);
        if (truthyValue) {
         newArray.push(collectionArr[i])
        }
   }
    
return newArray
}

function mySize(collection) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)
    let size = collectionArr.length
    return size
}

function myFirst(collection, n) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)
    
    if (n > 1) {
    collectionArr.splice(n)
    return collectionArr
} else if (n=1) {
    return collectionArr[0]
}
}
function myLast(collection, n) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)
    if (n >= 0) {
         return collectionArr.slice(-n)
    } else {
        return collectionArr[collectionArr.length - 1]
    }
}

function myKeys(object) {
    let keyArr = []
    for (const key in object) {
         keyArr.push(key)
     }
     return keyArr
}

function myValues(object) {
     let valArr = []
    for (const key in object) {
         valArr.push(object[key])
}
return valArr
}