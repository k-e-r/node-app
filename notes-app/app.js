import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import getNotes from './notes.js';

const yarg = yargs(hideBin(process.argv));

// Customize yargs version
yarg.version('1.1.0');

// Create add command
yarg.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  },
});

// Create remove command
yarg.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note');
  },
});

// Create list command
yarg.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all notes');
  },
});

// Create read command
yarg.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note');
  },
});

yarg.parse();
