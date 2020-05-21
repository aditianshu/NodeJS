const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const notes = require('./notes')
console.log(process.argv)

console.log(yargs.argv)
console.log(chalk.red.inverse.bold(validator.isEmail("aditianshu09@gmail.com")))
yargs.command({
    command:'add',
    describe:'to add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true
        },
        desc: {
            describe: 'Desc',
            demandOption : true,
            type: 'string'
        }
    },
    handler : function(argv){
        console.log(argv.title);
        notes.addNotes(argv.title, argv.desc)
    }
}).parse();


yargs.command({
    command:'remove',
    describe:'To remove specified note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
}).parse();

yargs.command({
    command : 'get',
    describe : 'getting the task deets',
    builder : {
        title : {
            describe : 'The task name',
            demandOption : false
        }
    },
    handler : function(argv){
        console.log(argv.title);
        notes.getNotes(argv.title)
    }
}).parse();


