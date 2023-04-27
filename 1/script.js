// forEach

let arr = [5, 6, 7, 8, 9];
let sum = 0;

arr.forEach(function(item) {
  sum += item;
});

console.log(sum);


// Map

let arr1 = [5, 6, 7, 8, 9];
let newArray = arr1.map(value => value ** 2);
console.log(newArray);

// Every

let arr2 = [{name: 'Ivan', country: 'Ukraine'},

           {name: 'Petro', country: 'Ukraine'},

           {name: 'Miguel', country: 'Cuba'}

          ]

const check = arr2.every(value => value === 'Ukraine');
console.log(check);

// Some

let arr3 = [{name: 'Ivan', country: 'Ukraine'},

        {name: 'Petro', country: 'Ukraine'},

        {name: 'Miguel', country: 'Cuba'}

         ]

const check1 = arr3.some(value => value.country === 'Cuba');
console.log(check1);

// Filter

let arr4 = [1, 'string', [3, 4], 5, [6, 7]];
const check2 = arr4.filter(value => Array.isArray(value));
console.log(check2);

// Reduce

// 1
let arr5 = [1, 2, 5, 0, 4, 5, 6];
let i = true
const suma = arr5.reduce((total, value) => {
    if (value === 0) {
        i = false
    }
    if (i) {
        return total + value
    }
    return total
}, 0)

console.log(suma);

// 2

let arr6 = [1, 2, 3, 0, 4, 5, 6];
const suma1 = arr6.reduce((total, value, i) => {
    if (total < 10) {
        return total + value
    }
    return {
        total,
        i
    }
})
console.log(suma1)

// Task7

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
const filter = arr7.filter(item => item > 0);
const square = filter.map(item => Math.sqrt(item));                      
console.log(square);