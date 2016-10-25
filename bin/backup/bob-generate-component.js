var program = require('commander');
program
    .action(function (name) {
    console.log(name);
})
    .parse(process.argv);
