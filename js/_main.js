var posts = [];

posts.push(new Post("Titolo 2","dasadssd addsadsda adsdsa dsa saasd",true,false))
posts.push(new Post("titolo 3","ldasda dasodsaodsa adsodoasdsa",false,true))
posts.push(new Post("Titolo 4","dsadasd dsaasdasdas",true,false))
posts.push(new Post("titolo 5","dasads sdads aasd",true,true))
posts.push(new Post("Titolone","dasa dssd adsaasd  dsadsasddassadasd dasjkasd",true,false))


new PostController().init();









// $(document).ready(function () {


//     // var users = [
//     //     'mario', 'giulio', 'alberto', 'claudia'
//     // ]

//     // $(".send-comment").click(function () {
//     //     var commentText = $(".comment-text").val();

//     //     var commentContainer = $(".comments-container");
//     //     var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">' + users[Math.round(Math.random(0, 3))
//     //     ] + '</a>' + commentText + '</li>';

//     //     commentContainer.append(commentRow);

//     // });

    // for(var i = 0; i< posts.length; i++){
    //     var post = posts[i];
    //     if(post.public === true){
    //         createUIPost(post);
    //     }


//     // }

    

//     // $("#savePostBtn").click(addPost);


// });


// function createUIPost(post){
//     var postContainer = $("#postContainer").clone();
//     postContainer.css("display","block");
//     postContainer.attr("id","");
//     postContainer.addClass("class","postContainer");

//     var postHeader = postContainer.find(".card-header");
//     var postBody = postContainer.find(".card-text");

//     postHeader.html(post.title);
//     postBody.html(post.body);

//     $("#postsRow").append(postContainer);

// }


// function closeModal(){
//     $("#newPostModal").modal("hide");
// }

// function resetModal(){
//     $("#postTitle").val("");
//     $("#postBody").val("");

// }
