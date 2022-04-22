const renderList = function () {
    $("li").remove()
    for (human of humanHandler.human) {
        $('ul').append(`<li> ${human} </li>`)
    }
}