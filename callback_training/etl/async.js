const fs = require("fs");
const csvToJson = require("./utils");
var cars = [];
var customers = [];

//use fs.readFile and fs.writeFile
function readContent(filePath, callback) {
    fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) return callback(err)
        callback(content);
    })
}

readContent(__dirname + '/car.csv', function (content) {
    let carJson = csvToJson(content);
    //console.log(carJson);
    combinedContent(carJson, null);
});

readContent(__dirname + '/customer.csv', function (content) {
    let customerJson = csvToJson(content);
    //console.log(customerJson);
    combinedContent(null, customerJson);
});

function combinedContent(newCars, newCustomers) {
    if (newCars) {
        cars = newCars;
    }
    if (newCustomers) {
        customers = newCustomers;
    }
    if (cars.length > 0 && customers.length > 0) {
        let newArr = [];
        customers.forEach((customer) => {
            var foundCar = cars.find((car) => car.customerId == customer.id)
            if (foundCar) {
              var newObj = { ...customer, ...foundCar};
              delete newObj.customerId;
            }
            newArr.push(newObj);
            console.log(newArr);
        });
        writeMyOutput(JSON.stringify(newArr));
    }

}

function writeMyOutput(content) {
    fs.writeFile("async_result.json", content, function (err) {
        if (err) throw err;
        console.log('async_result.json File Saved Successfully!');
    });
}
