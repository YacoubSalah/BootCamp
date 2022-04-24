const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]

let storyWihtoutSpecialChars = removeSpecialChar(story , specialChars)
let storyArray = stringToArray(storyWihtoutSpecialChars)
let wordCount = countWord(storyArray)
console.log(wordCount);

function removeSpecialChar(inputString , specialCharsArray){
    outputString = ""
    for(char of inputString){
        isCharSpecial = false
        for(specialChar of specialCharsArray ){
            if(char == specialChar){
                isCharSpecial = true
                break;
            }
        }
        if(isCharSpecial){
            isCharSpecial = false
        }else{
            outputString += char
        }
    }
    return outputString
}


function stringToArray(inputText){
    let outputArray = inputText.split(" ")
    for (i in outputArray){
        outputArray[i] = outputArray[i].toLowerCase()
    }
    return outputArray
}


function countWord(inputArray){
    let wordCount = {
    }
    for (checkWord of inputArray){
        if(!(checkWord in wordCount))
        {
            wordCount[checkWord] = 1
        }else{
            wordCount[checkWord] += 1
        }
    }
    return wordCount
}
