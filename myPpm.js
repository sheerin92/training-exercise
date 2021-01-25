var fs = require('fs');
const fetch = require("node-fetch");
var AnyFile = require('any-file');
const path = require('path');

var data = fs.readFileSync(__dirname + '/dependencies.json', 'utf8');
var dependencyData = JSON.parse(data);
//console.log(dependencyData);
const myDependencies = dependencyData.libs;
//console.log(myDependencies);

class RegistryData {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}

const registryData = new RegistryData;

registryData.get("https://packagemanager.vercel.app/registry.json")
    .then(data => {
        var regData = data;
        //console.log(regData);
        const registryDependancies = regData.config;
        //console.log(registryDependancies);
        var resultantDependencies = registryDependancies.filter(function (regDependency) {
            return myDependencies.some(function (myDependency) {
                return myDependency.name === regDependency.name; // return the ones with equal name    
            });
        });
        //console.log(resultantDependencies);
        fs.mkdir(path.join(__dirname, 'ppm_modules'), (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');
        });
        var af = new AnyFile();
        var fromFile;
        var toFileName;
        var toFile;
        for (var i = 0; i < resultantDependencies.length; i++) {

            fromFile = resultantDependencies[i].path;
            toFileName = resultantDependencies[i].name;
            toFile = `${toFileName}.txt`;

            af.from(fromFile).to(toFile, function (err, res) {
                if (res) {
                    console.log("File copied!");
                } else {
                    console.log("File not copied!");
                }
            });
        }
    })
    .catch(err => console.log(err));