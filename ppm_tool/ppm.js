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
        downloadDependencies(registryDependancies);
        createDir();
    })
    .catch(err => console.log(err));

function downloadDependencies(registryDependancies) {
    myDependencies.forEach(dependency => {
        var foundDependency = registryDependancies.find((registryDependency) => {
            return registryDependency.name == dependency.name && registryDependency.version == dependency.version;
        })
        // console.log(foundDependency);
        if (foundDependency) {
            installDependency(foundDependency);
            return;
        }
    });
}

function createDir() {
    fs.mkdir(path.join(__dirname, 'ppm_modules'), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });
}

function installDependency(dependency) {
    var af = new AnyFile();
    fromFile = dependency.path;
    toFileName = dependency.name;
    toFile = __dirname + `/ppm_modules/ ${toFileName}.txt`;

    af.from(fromFile).to(toFile, function (err, res) {
        if (res) {
            console.log("File copied!");
        } else {
            console.log("File not copied!");
        }
    });
}
