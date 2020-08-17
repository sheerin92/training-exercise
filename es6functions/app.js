var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin ‘Snap’ Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];


//map() function

/*  const p= pilots.map(function(pilot){
      return pilot.id
  })
  console.log(p);

//filter() function
 
const f= pilots.filter (function (pilot) {
    return pilot.years > 16;
   })
console.log(f);

//reduce() function

const total= pilots.reduce(
  function(accumulator,pilot){
    return accumulator + pilot.years; 
   },0);
console.log(total);

var myArr = [];
pilots.forEach(myFunction);

function myFunction(pilot) {
    var myId = pilot.id;
    myArr.push(myId);
}
console.log(myArr); */


function sheerinMap(inputArray, key) {
    var outputArr = [];
    /* inputArray.forEach((element)=>{
        outputArr.push(element[key]);
    }); */

    for(let i=0; i<inputArray.length; i++){
       // console.log(inputArray[i]);
        outputArr.push(inputArray[i][key]);
    }
    return outputArr;
}

console.log("Map Output: "+sheerinMap(pilots, 'years'));


function sheerinFilter(inputArray, key, value){
    var outputArr= [];
/*for (let i=0; i<inputArray.length; i++){
        if((inputArray[i][key] > value)){
            outputArr.push(inputArray[i]);
        }
    }
    return outputArr; */
    inputArray.forEach(function(inputObj){
        if(inputObj[key]> value){
            outputArr.push(inputObj);
        }
    })
    return outputArr;
}

console.log("Filter Output: "+JSON.stringify(sheerinFilter(pilots, 'years', 16)));


function sheerinReduce(inputArray,key){
    var output=0;
    /* for(let i=0; i<inputArray.length; i++){
        output= output+inputArray[i][key];
    }
    return output; */
    inputArray.forEach(function(inputObj){
        output=output+inputObj[key];
    })
    return output;
}
console.log("Reduce Output: "+sheerinReduce(pilots,'years'));





