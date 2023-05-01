#!/usr/bin/env node
import minimist from "minimist";
import {rpsls, RPSLSHelp, RPSLSRules} from "../lib/rpsls.js"

const args = minimist(process.argv.slice(2),{
    alias: {
        r: "rules"
    }
});

switch(true) {
    case (args.h || args.help):
        RPSLSHelp();
        process.exit();
    case (args.r || args.rules):
        RPSLSRules();
        process.exit()
    default:
        var playChoice = args._[0];

        if (!playChoice) {
            const result = { "player": "rock"};
            console.log(JSON.stringify(result));
            process.exit();
        }
        
        playChoice = playChoice.toLowerCase;
        const result = rpsls(playChoice);

        if (!(typeof result == "undefined")) {
            console.log(JSON.stringify(result));
            process.exit();
        }
        process.exit();
}
