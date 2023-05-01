#!/usr/bin/env node

import minimist from "minimist";
import { rps,help,rules } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});
