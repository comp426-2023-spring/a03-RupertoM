#!/usr/bin/env node
import {rpsls, RPSLSHelp, RPSLSRules} from "../lib/rpsls.js"
import minimist from "minimist";
const args = minimist(process.argv.slice(2),{
    alias: {
        r: "rules"
    }
});

if (args.h || args.help) {
    RPSLSHelp();
    process.exit();
} else if (args.r || args.rules) {
    RPSLSRules();
    process.exit();
}
