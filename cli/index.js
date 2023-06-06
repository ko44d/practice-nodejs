const path = require("path");
const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");
const {getPackageName} = require("./lib/name");
const {readMarkdownFileSync, writeHtmlFileSync} = require("./lib/file");
const {marked} = require("marked");

marked.setOptions({
    mangle: false,
    headerIds: false
})

const { argv } = yargs(hideBin(process.argv))
    .option("name", {describe: "diplay CLI name."})
    .option("file", {describe: "path to Markdown file."})
    .option("output", {describe: "output html file", default: "article.html"});

if (argv.name) {
    const name = getPackageName();
    console.log(name);
    process.exit(0);
}

const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
const html = marked(markdownStr);

writeHtmlFileSync(path.resolve(__dirname, argv.output), html);