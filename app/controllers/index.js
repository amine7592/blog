var postController = function () {

    this. posts = [];

    this.postsContainer;
    this.postContainer;
    this.modal;
    this.openModalBtn;
    this.modalTitle;
    this.modalDescription;
    this.modalPublicCheck;
    this.addPostBtn;

    function init() {

        

        $(document).ready(function () {
            postsRow = $("#postsRow");
            postContainer = $("#postContainer");
            modal = $("#newPostModal");
            modalTitle = $("#postTitle");
            modalBody = $("#postDescription");
            modalCheck = $("#publicCheck");
            addPostBtn = $("#savePostBtn");
            var posts;

            $.get({
                url: "https://api.npoint.io/24620ef625c768a4f3c4",
                dataType: "text",
                success: function(data,textStatus,jqXHR){
                        console.log("data",JSON.parse(data));
                        posts = JSON.parse(data);

                        console.log(JSON.stringify(posts));


                        for(var i = 0; i< posts.length; i++){
                            var post = posts[i];
                            if(post.public === true){
                                createUIPost(post);
                            }
                        }



                }
              });


            addPostBtn.click(function(){
                var post = new Post("adsdsa","asddasdas",true,false);
                addPost(post);
            });

           


        });

    }


    function getPosts() {
        let posts = []
        posts.push(new Post("Titolo 2", "dasadssd addsadsda adsdsa dsa saasd", true, false))
        posts.push(new Post("titolo 3", "ldasda dasodsaodsa adsodoasdsa", false, true))
        posts.push(new Post("Titolo 4", "dsadasd dsaasdasdas", true, false))
        posts.push(new Post("titolo 5", "dasads sdads aasd", true, true))
        posts.push(new Post("Titolone", "dasa dssd adsaasd  dsadsasddassadasd dasjkasd", true, false))
        return posts;
    }


    function addPost(post) {

        console.log("post",post);
        var postContainer = $("#postContainer").clone();
        postContainer.css("display","block");
        postContainer.attr("id","");
        postContainer.addClass("class","postContainer");
    
        var postHeader = postContainer.find(".card-header");
        var postBody = postContainer.find(".card-text");
    
        postHeader.html(post.title);
        postBody.html(post.body);
    
        $("#postsRow").append(postContainer);



    }

    function createUIPost(post){
        var postContainer = $("#postContainer").clone();
        postContainer.css("display","block");
        postContainer.attr("id","");
        postContainer.addClass("class","postContainer");
    
        var postHeader = postContainer.find(".card-header");
        var postBody = postContainer.find(".card-text");
    
        postHeader.html(post.title);
        postBody.html(post.body);
    
        $("#postsRow").append(postContainer);
    
    }

    function closeModal() {

    }


    function openModal() {


    }


    function resetModal() {

    }

    return {
        init : init,
        addPost:addPost,
    };

}