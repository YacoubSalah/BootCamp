// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li").eq(0).css("color", "green")
// $("li").eq(1).css("color", "pink")
// $("#brown-div").css("color", "brown")

// $("#box1").addClass("box")
// $("#box2").addClass("box")


// $("#inputfield").val("Hello World")
// let barcode = $("#illegalProduct").data().barcode
// let expDate = $("#illegalProduct").data().expirationdate
// console.log("The item with barcode " + barcode + " will expire on " + expDate)

// //$("#solidBox").css("background-color" , "green")
// const changeBoxColor = function(){
//     $("#solidBox"). css("background-color" , "green")
    
// }
// $("#solidBox").hover(changeBoxColor)

// const showinput = function(){
//     inputval=$("input").eq(2).val()
//     alert(inputval)
// }
// $("button").click(showinput)

//BEFORE THIS

const changeColor= function(){
    $(this).css("background-color","red")
}

$(".box").click(changeColor)