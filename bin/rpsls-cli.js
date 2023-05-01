#!/usr/bin/env node
import minimist from "minimist";

const args = minimist(process.argv.slice(2),{
    alias: {
        r: "rules"
    }
});

import {rpsls, RPSLSHelp, RPSLSRules} from "../lib/rpsls.js"

if (args.h || args.help) {
    RPSLSHelp();
    process.exit();
} else if (args.r || args.rules) {
    RPSLSRules();
    process.exit();
}
else {
    var playChoice = args._[0];

    if (!playChoice) {
        var result = { "player": "rock" };
        console.log(JSON.stringify(result));
        process.exit();
    }

    playChoice = playChoice.toLowerCase();

    var result = rpsls(playerMove);

    if (!(typeof result == "undefined")) {
        console.log(JSON.stringify(result));
    }
    process.exit();
}
