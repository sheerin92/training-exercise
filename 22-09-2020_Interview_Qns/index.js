function async1(a, cb) {
  setTimeout(() => {
    cb(a * 100);
  }, 2000);
}
let x = 2;
async1(x, m => console.log(m * 100));

// 1. Print the output hundered using callback

// 2. Convert Callback to Promise

function callBackToPromise(a) {
  return new Promise((resolve, reject) => {
    if (a) {
      resolve(a * 100);
    } else {
      reject("failure");
    }
  })
}

var promise1 = callBackToPromise(2);
promise1.then(function (value) {
  console.log(value * 100);
}).catch(function (err) {
  console.error(err);
})


// 3. Move the yellow box to left, right using keys

// 4. Implement combineArray
// output should be [2,3,7,8,9,12, 13,14,15]


function combineArray(a, b) {
  let c = [];
  let x=0;
  let i=0;

  while( i < a.length &&  i < b.length){
    if(a[i] < b[i]){
      c.push (a[i]);
      c.push(b[i]);
    } else {
      c.push(b[i]);
      c.push(a[i]);
    }
      i++;
  }
  
  if(i===a.length){
      
      for (x=i; x < b.length; x++){
          c.push (b[x]);
      }
  }
  
  else{
      
      for(x=i; x < a.length; x++)
      c.push (a[x]);
  }
 //c.sort((a,b) =>  a-b);
  return c;
}


let a = [3, 7, 9, 12, 15];
let b = [2, 8, 13, 14];
let combinedArr = combineArray(a, b);

console.log(combinedArr);

// 5. print the character with count
// output should be d3t2a3p2k1



/*function countOfStr(str) {
  var output;
  var count = 0;
  for (var i = 0; i < str.length; i++) {

  }
  return output;
}

let givenString = "dddttaaappk";
console.log(countOfStr(givenString));*/