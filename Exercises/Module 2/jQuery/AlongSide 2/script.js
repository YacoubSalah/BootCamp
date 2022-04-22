/* $("h1").css("color", "blue")

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

const text = "Banana"
const item = $("<div class=fruit>" + text + "</div>")


console.log(item)
//prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

$(".feedme").on("click", function () {
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`

    $("body").append(divCopy)
})

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]

for (i in names){
    $("body").append(`<div>${names[i].first} - ${names[i].last}</div>`)
}

const removeHovered = function(){
    this.remove()
}

//$("div").on("mouseover", removeHovered) 
//OR
$("div").hover(removeHovered) */

//add blocks to div
const newDivElement = '<div class="blog">test</div>'
const appendBlog = function(){
    $("#blogs").append(newDivElement)
    $(".blog").click(changeBlogText)
}

const changeBlogText = function (){
    $(this).css("color" , "red")
    $(this).text("ouch")
}

$("button").on("click" , appendBlog)

//$(".blog").click(changeBlogText)