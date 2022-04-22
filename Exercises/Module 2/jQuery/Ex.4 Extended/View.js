const renderCart = function(){
    $("#cart").empty()
    for(items of cartHandler.cartItems){
        if (items.quantity > 0){
            $("#cart").append((`<div name="${items.name}">${items.name} x ${items.quantity}</div>`))
        }
        
    }
}