#!/usr/bin/env node

import minimist from "minimist";
import { rps,help,rules } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});


if (args.h || args.help){
    help();
    process.exit(0)
} 

if (args.r || args.rules){
    rules();
    process.exit();
    
} else {
    var playChoice = args._[0];

    if(!playChoice){
        var result = {"player":"rock"};
        console.log(JSON.stringify(result));
        process.exit();
    }

    playChoice = playChoice.toLowerCase();

    var result = rps(playChoice);

    if(!(typeof result == "undefined")){
        console.log(JSON.stringify(result));
        process.exit();
    }
    process.exit();
}
