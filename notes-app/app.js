import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as notes from './notes.js';

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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yarg.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yarg.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    notes.listNotes();
  },
});

// Create read command
yarg.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note');
  },
});

yarg.parse();
