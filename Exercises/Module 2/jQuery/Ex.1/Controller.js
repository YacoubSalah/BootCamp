const humanHandler = humanDB()

$("button").on("click", function(){
    let newHuman = $("#nameField").val()
    humanHandler.addNew(newHuman)
    renderList()
})