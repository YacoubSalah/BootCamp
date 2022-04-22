const cartHandler = cart()

$("#items").on("click", ".item", function () {
    if ($(this).data("instock")) {
        cartHandler.add($(this).text())
        renderCart()
    }
})

$("#cart").on("click", "div" , function(){
    cartHandler.remove($(this).attr('name'))
    renderCart()
})