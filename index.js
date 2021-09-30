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

/*function myReduce(collection, callback, acc) {
    const collectionArr = collection instanceof Array === true? collection : Object.values(collection)

let acc = collectionArr[0];
for (let i = 0; i < collectionArr.length; i++) {
    if (i === 0 & !collectionArr[0]) {
        continue;
    }
    acc = callback(acc, collectionArr[i]) 
        
}
return acc
}*/


function myFind(collection, callback) {
    
const collectionArr = collection instanceof Array === true? collection : Object.values(collection)
 let firstValueFound = collectionArr[i]
    while (i < firstValueFound.length) { 
        const truthyValue = callback(collectionArr[i], i, collectionArr);
        if (truthyValue) {
            firstValueFound
            break;
        }
        i++
   }
    return firstValueFound
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
