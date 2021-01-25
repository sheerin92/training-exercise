var fs = require('fs');
const fetch = require("node-fetch");
var AnyFile = require('any-file');
const path = require('path');
const folderName = 'ppm_modules';

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
    var dir = `./${folderName}`;
    if (fs.existsSync(dir)) {
        console.log("Directory already exists");
        return;
    }
    fs.mkdir(path.join(__dirname, folderName), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

}

function installDependency(dependency) {
    var af = new AnyFile();
    const fromFile = dependency.path;
    const toFileName = dependency.name;
    const toFile = __dirname + `/${folderName}/ ${toFileName}.txt`;
   
    if (fs.existsSync(toFile)) {
        console.log(toFileName+".txt - File already exists");
        return;
    }

    af.from(fromFile).to(toFile, function (err, res) {
        if (res) {
            console.log("File copied!");
        } else {
            console.log("File not copied!");
        }
    });    
}

