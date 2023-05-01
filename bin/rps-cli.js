#!/usr/bin/env node

import minimist from "minimist";
import { rps,help,rules } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});

switch(true) {
    case (args.h || args.help):
        help();
        process.exit();
    case (args.r || args.rules):
        rules();
        process.exit()
    default:
        var playChoice = args._[0];

        if (!playChoice) {
            const result = { "play": "rock"};
            console.log(JSON.stringify(result));
            process.exit();
        }
        
        playChoice = playChoice.toLowerCase;
        const result = rps(playChoice);

        if (!(typeof result == "undefined")) {
            console.log(JSON.stringify(result));
            process.exit();
        }
        process.exit();
}
