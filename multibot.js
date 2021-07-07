const {
    fork
} = require("child_process");
if (!process.argv[2]) {
    console.log("Please provide number of sub-processes!");
    process.exit(1);
}
const count = Number(process.argv[2]);
if (isNaN(count)) {
    console.log("Please provide number of sub-processes!");
    process.exit(1);
}

for (var i = 0; i < count; i++) {
    console.log(`Launching bot #${i}`)
    setTimeout(() => {
        fork("index.js");
    }, i * 1)
}