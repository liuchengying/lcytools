#!/usr/bin/env node
var fs = require('fs');
var path    = require('path');
var path1   = process.cwd();
var appInfo = require('../package.json');

var cmd= require('commander');

var animals = fs.readFileSync(path.join(__dirname, '../data/animal.txt')).toString().split('%\n');
var jokes = fs.readFileSync(path.join(__dirname, '../data/jokes.txt')).toString().split('%\n');
var quotes = fs.readFileSync(path.join(__dirname, '../data/quotes.txt')).toString().split('%\n');


cmd.version(appInfo.version)
    .option('-i, --index <n>', 'ascii art index, default is random', -1, parseInt)
    .option('-t, --type <value>', '[quotes|jokes|tang|song]', 'quotes', /^(quotes|jokes|tang|song)$/i)
    .on('--help', function () {
        console.log('\t' + appInfo.repository.url);
    }).parse(process.argv);
    console.log(jokes + '\n\n');
    console.log(quotes + '\n\n');
    console.log(animals + '\n\n');
function app(obj) {
    if (obj[0] === '-v' || obj[0] === '--version') {
        console.log('    version is' + appInfo.version);
    } else if (obj[0] === '-h' || obj[0] === '--help') {
        console.log('Useage:');
        console.log('    -v --version [show version]');
    } else {
        fs.readdir(path1, function (err, files) {
            if (err) {
                return console.log(err);
            }
        });
    }
};
app(process.argv.slice(2));


