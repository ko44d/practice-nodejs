const path = require("path");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const {getPackageName} = require("./lib/name");
const {readMarkdownFileSync} = require("./lib/file");

const { argv } = yargs(hideBin(process.argv))
    .option('name', {describe: 'diplay CLI name.'})
    .option('file', {describe: 'path to Markdown file.'});

if (argv.name) {
    const name = getPackageName();
    console.log(name);
    process.exit(0);
}

const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
console.log(markdownStr);