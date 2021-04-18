const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const { demandOption } = require('yargs');

const command = process?.argv[2];
console.log(yargs.argv.title)

yargs.command({
    command: 'add',
    describe: 'add new note',
    handler: (argv) => {
        console.log(chalk.green('Adding new note'), argv.body)
    },
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: () => console.log(chalk.red('Remove new note'))
})

yargs.command({
    command: 'list',
    describe: 'list note',
    handler: () => console.log(chalk.blue('List new note'))
})

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: () => console.log(chalk.violet('read new note'))
})

//console.log(yargs.argv)
/**if (command === 'add') {
    console.log(chalk.green('Adding note'))
} else if (command = 'remove') {
    console.log(chalk.red('Removing note'))
}*/

yargs.parse()