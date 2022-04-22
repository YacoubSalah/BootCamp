const humanHandler = humanDB()

$("button").on("click", function(){
    let newHuman = $("#nameField").val()
    humanHandler.addNew(newHuman)
    renderList()
})

$("ul").on("click", "li" , function(){
    entryIndix = $(this).index()
    humanHandler.removeEntry(entryIndix)
    renderList()
})