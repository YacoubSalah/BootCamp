$("#colors").children().each(function () {
    $(this).addClass("picker")
    $(this).css("background-color", $(this).data("color"))

})

$(".picker").on("click", function () {
    newColor = $(this).data("color")
    $(".box").css("background-color", newColor)
})
