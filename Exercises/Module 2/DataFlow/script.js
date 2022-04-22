    let posts = [
        {
            name: "Yacoub",
            text: "travel to italy"
        },
        {
            name: "Mariam",
            text: "having a daughter"
        },
        {
            name: "Yousef",
            text: "domminating all"
        },
        {
            name: "Saif",
            text: "peace of mind"
        },
        {
            name: "Yasin",
            text: "climb the stairs"
        }
    ]

    render = function () {
        if ($("#postList")) {
            $("#postList").remove()
        }
        $("body").append($(`<div id="postList"></div>`))
        for (post of posts) {
            const newPost = "<div>" + post.name + " wishes to, " + post.text + ".</div>"
            const newpostelement = $(newPost)
            $("#postList").append($(`<div> ${post.name} wishes to ${post.text} .</div>`))
        }
    }

    postClicked = function () {
        newPost = {
            name: $("#nameField").val(),
            text: $("#wishField").val()
        }
        posts.push(newPost)
        render()
    }

$("button").on("click", postClicked)