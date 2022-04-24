const tweeter = Tweeter()

render = function () {
    $("#PostContainer").empty()
    let postsDB = tweeter.getPosts()
    console.log(postsDB)
    createThePosts(postsDB)
}

function createThePosts(postsDB){
    for(post of postsDB){
        let newpost=
        `<div id="${post.id}" class="post">
            <div class="post-text">${post.text}</div>
            <div id="commnents">
            ${fetchComments(post.comments)}
            </div>
            <div id="CommentPost">
                <input type="text" placeholder="write a comment!">
                <button type="submit">Comment</button>
            </div>
            <div class="delete">Delete</div>
        </div>`
        $("#PostContainer").append(newpost)
    }
}

function fetchComments(postComments){
    let newcomment =""
    for(comment of postComments){
        newcomment+=
        `
        <div class="comment">
        <i class="fa-solid fa-xmark delete-comment"></i>
        <div class="comments">${comment.text}</div>
        </div>
        `
    }
    return newcomment
}
