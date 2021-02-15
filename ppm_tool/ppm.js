var fs = require('fs');
const fetch = require("node-fetch");
var AnyFile = require('any-file');
const path = require('path');
const folderName = 'ppm_modules';
var AdmZip = require('adm-zip');

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

registryData.get("https://ppm-registry.s3.ap-south-1.amazonaws.com/registry.json")
    .then(data => {
        var regData = data;
        //console.log(regData);
        const registryDependancies = regData.configs;
        //console.log(registryDependancies);
        createDir();
        downloadDependencies(registryDependancies);

    })
    .catch(err => console.log(err));

function downloadDependencies(registryDependancies) {
    myDependencies.forEach(dependency => {
        var foundDependency = registryDependancies.find((registryDependency) => {
            return registryDependency.name == dependency.name && registryDependency.version == dependency.version;
        })
        //console.log(foundDependency);
        if (foundDependency) {
            installDependency(foundDependency);
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
    const toFile = __dirname + `/${folderName}/${toFileName}.zip`;

    if (fs.existsSync(toFile)) {
        console.log(toFileName + ".zip - File already exists");
        return;
    }

    af.from(fromFile).to(toFile, function (err, res) {
        if (res) {
           // var zip = new AdmZip(toFile);
            //zip.extractAllTo(__dirname + `/${folderName}`, true);
            console.log("File copied!");
        } else {
            console.log("File not copied!");
        }
    });
}