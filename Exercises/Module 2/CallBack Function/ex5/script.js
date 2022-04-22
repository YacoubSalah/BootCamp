const capitalize = (toSolve) => {
    for (i in toSolve) {
        if (i == 0) {
            solved = toSolve[i].toUpperCase()
        }else{
            solved += toSolve[i].toLowerCase()
        }
    }
    return solved
}

// for one liner, take the first char to uppercase and the rest of the chart slice them and tolowercase



console.log(capitalize("bOb"));
// returns Bob
//capitalize("TAYLOR") // returns Taylor
//capitalize("feliSHIA") // returns Felishia
