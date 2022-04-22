const cart = function () {
    _Cart_Items = [
        /* {
            name: lapto,
            quantity: 1
        } */
    ]

    AddNewItem = (itemName) => {
        for (item of this._Cart_Items) {
            if (item.name == itemName) {
                item.quantity += 1
                return true
            }
        }
        newItem = {
            name: itemName,
            quantity: 1
        }
        this._Cart_Items.push(newItem)
    }

    RemoveItem = (itemName) => {
        //itemName = (itemName.split(" "))[0]
        for (item of this._Cart_Items) {
            if (item.name == itemName) {
                item.quantity -= 1
            }
        }
    }

    return {
        cartItems: _Cart_Items,
        add: AddNewItem,
        remove: RemoveItem
    }
}