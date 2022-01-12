const fs = require('fs-extra');
const chalk = require('colorette');
const spawn = require('cross-spawn');

console.log(chalk.yellow("Good Morning, Captain"));

const spawnWatcher = (config) => {
    return new Promise((resolve, reject) => {
        const child = spawn.spawn("yarn", [
            "babel",
            "src",
            "--watch",
            "--out-dir",
            `dev/${config.slug}_dev/Scripts`
        ], { stdio: "pipe" });
        child.on('close', code => code > 0 ? reject(code) : resolve())
    })
}

fs.readJson("./config/project.json").then((config) => {
    console.log(chalk.green("Who watches the watchman"));
    return spawnWatcher(config)
}).then((e) => {
    console.log(chalk.green("Signing off"));
}).catch((e) => {
    console.log(chalk.red("something went wrong"));
    console.error(e);
})
