
const obj1={}
obj1['1'] = 100
obj1['1']++
if (obj1['0'])
console.log('key found')
else console.log('key not found')

const arr = [1,2,3,4,1,2,1,3,2,6,4,2,1,1,1,3];
const obj = {}


for(let i = 0; i < arr.length; i++){
    const element = arr[i]
    if (obj[element]){
        obj[element]++
    }
    else{
        obj[element] = 1

    }
}

console.log(obj)




const array = [1,2,3,4,5]
array.forEach(function(item){
    console.log(item)
    return item
})

const array1 = [1,2,3,4,5]
const a = array1.forEach(function(item){
    return item
})

console.log(a)

const array2 = [1,2,3,4,5]
const b = array2.map(function(item){
    return item
})

console.log(b)

const array3 = [1,2,3,4,5]
const c = array3.map(function(item){
    return item*2
})

console.log(c)




