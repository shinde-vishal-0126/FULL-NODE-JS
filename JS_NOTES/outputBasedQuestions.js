// 1.
const x = {},
  y = { k: 1 },
  z = { k: 2 };
console.log(x);
// "We are using object y as the key
// But JavaScript's normal {} object property keys are primarily strings or symbols. so it retun "[object Object]"
console.log(x[y]);
x[y] = 1;
// x["[object Object]"]
console.log(x);
console.log(x[y]);
// also z is object so if you try to get the z it also return 1 but also if you want to add value of z then add
x[z] = 2;
console.log(x[y]);

// # note
// if you used object in javascript object as kay it  convert into the string so it return // "[object Object]"
// if you used object as key it return as a "[object Object]"

// 2
// example of type cohetion if you perform any
console.log(false * 12, '5' * '2', true + true);

// 3
// === check content as well as data types
console.log(typeof new Number(5), new Number(5) === 5);
// but == check only content
console.log(new Number(5) == 5);

// 4
(async () => 'v')().then((v) => console.log('then', v));

// 5
console.log(
  [87, 35]
    .map((m) => (m < 60 ? m + 20 : m))
    .filter((m) => m > 60)
    .reduce((a, m) => a + m)
);

// 6
// it return false bease they are differnt object
// so each object create separte object in memory so that way they are not equal
// object are compare by using the memory/ or refrences concept (so not used == or === to compate object )
//
console.log({} == {});

// 7
const a = {};
const b = a;
// it return true becase it a assign to be so both are refer to the same memory location so return true.
console.log(a == b);
