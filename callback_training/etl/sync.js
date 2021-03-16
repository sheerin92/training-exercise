const fs = require("fs");
const csvToJson = require("./utils");

const cars = fs.readFileSync(__dirname + '/car.csv', 'utf8');
//console.log(cars);
const customers = fs.readFileSync(__dirname + '/customer.csv', 'utf8');
//console.log(customers);

const carJson = csvToJson(cars);
const customerJson = csvToJson(customers);
//console.log(carJson);
//console.log(customerJson);
combinedContent(carJson, customerJson)

function combinedContent(cars, customers) {
    let newArr = [];

    customers.forEach((customer) => {
        var foundCar = cars.find((car) => car.customerId == customer.id)
        if (foundCar) {
            var newObj = { ...customer, ...foundCar };
            delete newObj.customerId;
        }
        newArr.push(newObj);
        console.log(newArr);
    });
    fs.writeFileSync('sync_result.json', JSON.stringify(newArr));
}




/*

[
    {
        id:1004,
        name:"john",
        age:34,
        carCompany:'ford',
        carName:'figo'
    }
]
 */

// use fs.readFileSync and fs.writeFileSync

