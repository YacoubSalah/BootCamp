const StringFormatter = function (inputString) {

    capitalizeFirst = function (inputString) {
        let outputString = ""
        for (i in inputString) {
            if (i == 0) {
                outputString += inputString[i].toUpperCase()
            } else {
                outputString += inputString[i].toLowerCase()
            }
        }
        console.log(outputString);
        return outputString
    }

    skewerCase = function (inputString) {
        let outputString = ""
        for (i of inputString) {
            if (i == " ") {
                outputString += "_"
            } else {
                outputString += i
            }
        }
        console.log(outputString);
        return outputString
    }

    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}



const formatter = StringFormatter()


//formatter.capitalizeFirst("dorothy") //should print Dorothy
//formatter.skewerCase("blue box") //should print blue-box

