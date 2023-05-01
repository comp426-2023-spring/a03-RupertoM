const options = ["rock", "paper", "scissors"]

const RPSLSOptions = ["rock", "paper", "scissors", "lizard", "spock"];

export function rps(playChoice) {
    if (!options.includes(playChoice)) {
        console.error('${playChoice} is not a one of the possible choices.')
        rules();
        help();
        return;
    }
  
    const opponentChoice = options[Math.random() * (2 - 0 + 1) + 0];
    
    //add switch case to do lose, win, or tie
    switch(true) {

        //tie case
        case (playChoice == opponentChoice):
            return {
                "player": playChoice,
                "opponent": opponentChoice,
                "result": "tie"
            };

        //win
        case (playChoice == "scissors" && opponentChoice == "paper"):
        case (playChoice == "paper" && opponentChoice == "rock"):
        case (playChoice == "rock" && opponentChoice == "scissors"):
            return {
                "player": playChoice,
                "opponent": opponentChoice,
                "result": "win"
            };

        //lose
        case (playChoice == "paper" && opponentChoice == "scissors"):
        case (playChoice == "rock" && opponentChoice == "paper"):
        case (playChoice == "scissors" && opponentChoice == "rock"):
            return {
                "player": playChoice,
                "opponent": opponentChoice,
                "result": "lose"
            };
    }
}

export function rpsls(playChoice) {
    if (!RPSLSOptions.includes(playChoice)) {
        console.error('${playChoice} is not a one of the possible choices.')
        RPSLSRules();
        RPSLSHelp();
        return;
    }
    const opponentChoice = RPSLSOptions[Math.random() * (2 - 0 + 1) + 0];

    switch(true) {

        //tie
        case (playChoice == opponentChoice):
            return {
                "play": playChoice,
                "opponent": opponentChoice,
                "result": "tie"
            };

        //win
        case (playChoice == "scissors" && opponentChoice == "paper"):
        case (playChoice == "paper" && opponentChoice == "rock"):
        case (playChoice == "rock" && opponentChoice == "lizard"):
        case (playChoice == "lizard" && opponentChoice == "spock"):
        case (playChoice == "spock" && opponentChoice == "scissors"):
        case (playChoice == "scissors" && opponentChoice == "lizard"):
        case (playChoice == "lizard" && opponentChoice == "paper"):
        case (playChoice == "paper" && opponentChoice == "spock"):
        case (playChoice == "spock" && opponentChoice == "rock"):
        case (playChoice == "rock" && opponentChoice == "scissors"):
            return {
                "play": playChoice,
                "opponent": opponentChoice,
                "result": "win"
            };

        //lose
        case (playChoice == "paper" && opponentChoice == "scissors"):
        case (playChoice == "rock" && opponentChoice == "paper"):
        case (playChoice == "lizard" && opponentChoice == "rock"):
        case (playChoice == "spock" && opponentChoice == "lizard"):
        case (playChoice == "scissors" && opponentChoice == "spock"):
        case (playChoice == "lizard" && opponentChoice == "scissors"):
        case (playChoice == "paper" && opponentChoice == "lizard"):
        case (playChoice == "spock" && opponentChoice == "paper"):
        case (playChoice == "rock" && opponentChoice == "spock"):
        case (playChoice == "scissors" && opponentChoice == "rock"):
            return {
                "play": playChoice,
                "opponent": opponentChoice,
                "result": "lose"
            };
    }
}

//rules

export function rules() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    return;
}

export function RPSLSRules() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    return;
}

//help

export function help() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single play RPS result.
                      e.g. {"play":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"play":"rock","opponent":"scissors","result":"win"}`);
    return;
}

export function RPSLSHelp() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single play RPSLS result.
                        e.g. {"play":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"play":"rock","opponent":"Spock","result":"lose"}`);
    return;
}
