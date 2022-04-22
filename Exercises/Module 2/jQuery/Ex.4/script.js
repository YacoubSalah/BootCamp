$("#items").on("click", ".item", function () {
    if ($(this).data("instock")) {
        $("#cart").append($(`<div>${$(this).text()}</div>`))
    }
})