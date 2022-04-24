const ball = document.getElementById("block")
cont STEP = 15

const upBotton = document.getElementById("up")
upBotton.onclick = function () {
    let currentTop = (parseInt(ball.style.top) || 0)
    if (currentTop > STEP) {
        ball.style.top = (currentTop - STEP) + "px"
    }
}

const downBotton = document.getElementById("down")
downBotton.onclick = function () {
    let currentTop = (parseInt(ball.style.top) || 0)
    if (currentTop < 375) {
        ball.style.top = (currentTop + STEP) + "px"
    }
}

const rightBotton = document.getElementById("right")
rightBotton.onclick = function () {
    let currentLeft = (parseInt(ball.style.left) || 0)
    if (currentLeft < 405) {
        ball.style.left = (currentLeft + STEP) + "px"
    }
}

const leftBotton = document.getElementById("left")
leftBotton.onclick = function () {
    let currentLeft = (parseInt(ball.style.left) || 0)
    if (currentLeft > STEP) {
        ball.style.left = (currentLeft - STEP) + "px"
    }
}