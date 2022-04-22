const boxElement = (`<div class="box" ></div>`)
//const boxElements = $(`<div class="box" ></div>`) // for testing with Ameer

$("body").append(boxElement)
$("body").append(boxElement)

hoverin = function () {
    $(this).css("background-color", "red")
}

hoverout = function () {
    $(this).css("background-color", "#8e44ad")
}

$(".box").hover(hoverin, hoverout)