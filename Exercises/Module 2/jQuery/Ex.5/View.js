const fruits = fruitHandler()
const renderFruitsByColor = function(){
    for( fruit of fruits.DB ){
        const elem= $(`<div class= ${fruit.color} > ${fruit.name} </div>` )
        $("#basket").append(elem)
    }
}