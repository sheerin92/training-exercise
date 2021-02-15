const fs = require('fs');
const https = require('https');
const AnyFile = require('any-file');
const AdmZip = require('adm-zip');

const PPM_REGISTRY_URL = "https://ppm-registry.s3.ap-south-1.amazonaws.com/registry.json";

/// list of registry files
//https://ppm-registry.s3.ap-south-1.amazonaws.com/lodash/1.0.0.zip
//https://ppm-registry.s3.ap-south-1.amazonaws.com/lodash/latest.zip
//https://ppm-registry.s3.ap-south-1.amazonaws.com/jquery/1.0.0.zip
//https://ppm-registry.s3.ap-south-1.amazonaws.com/jquery/latest.zip

console.log('ppm entry file');

// read dependencies.json file from example folder and find the list  lib name and version  from the dependencies.json
let ppmRegistryMap = {}; //key lib name + lib version
let dependenciesJson = fs.readFileSync(__dirname + '/dependencies.json');
let dependency = JSON.parse(dependenciesJson);

function init() {
    return new Promise((res, rej) => {
        https.get(PPM_REGISTRY_URL, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received
            resp.on('end', () => {
                res(JSON.parse(data));
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
            rej(err.message)
        });
    })
}

// init()
//     .then(buildPpmRegistryMap)
//     .then(downloadDepdencies)
//     .catch((err) => {
//     console.log("Error: " + err.message);
//      });


//  create ppm_lib folder and copy the files and extract folder
function buildPpmRegistryMap(data) {
    data.configs.forEach((registryInfo) => {
        let ppmRegistryKey = `${registryInfo.name}-${registryInfo.version}`;
        ppmRegistryMap[ppmRegistryKey] = registryInfo.path
    })
}

function downloadDepdencies() {
    Object.entries(dependency).forEach(([key, value]) => {
        let ppmRegistryKey = `${key}-${value}`;
        let dependencyPath = ppmRegistryMap[ppmRegistryKey];
        const directoryPath = `./ppm_modules/${key.toLowerCase()}`;
        if (dependencyPath) {
            createDirectory('./ppm_modules/');
            createDirectory(directoryPath);//create sub directory
            installDependency(dependencyPath, `${directoryPath}/${key}.zip`)
        }

    });

}


function createDirectory(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}


function installDependency(fromFile, toFile) {
    const af = new AnyFile();

    af.from(fromFile).to(toFile, function (err, res) {
        if (res) {
            console.log("File copied!");
        } else {
            console.log("File not copied!");
        }
    });
}

/*var zip = new AdmZip("./ppm_modules/jquery/jquery.zip");

zip.extractAllTo("./ppm_modules/", true);

var unzip = function (url, fileName) {
    return new Promise(function (resolve, reject) {

        var resolved = false;

        var zip = new AdmZip(url);
        var zipEntries = zip.getEntries(); // an array of ZipEntry records

        zipEntries.forEach(function (zipEntry) {
            if (zipEntry.entryName == fileName) {
                resolved = true;
                resolve(zipEntry.getData().toString('utf8'));
            }
        });

        if (!resolved) {
            reject(new Error('No file found in archive: ' + fileName));
        }
    });
};
*/

