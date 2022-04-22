
//part 1 , check html for correspoding elements

    /* $(".remove").on("click", function () {
        alert($(this).closest(".post").data().id)
    }) */


//part 2 , check html for correspoding elements    

    /* $('button').on('click', function () {
        let relevantInputValue = $(this).closest("div").find("input").val()
        alert(relevantInputValue)
    }) */

//part 3 , check html for correspoding elements

    $("button").on("click" , function(){
        alert($(this).closest("div").find("span").html())
    })