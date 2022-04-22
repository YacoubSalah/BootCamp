console.log(document)
//document.getElementById("playing-field").style.backgroundColor = "blue"
const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")

const moveRight = function () {
    let currentLeft = document.getElementById("block").style.left
    let newLeft = ((parseInt(currentLeft) || 0) + 15) + "px"
    document.getElementById("block").style.left = newLeft
}


const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)


const subheader = document.createElement("h2")
subheader.innerHTML = "Created By : Boot Camp"
subheader.setAttribute("class", "Header2")
document.body.appendChild(subheader)

const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const clickColor = function(){
    box.style.background = "#8e44ad"
    box.innerHTML = "I am clicked"
}