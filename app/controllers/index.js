class PostController{


    constructor(){
        this.posts = [];
        this.restController = new RestController();
        //UI
        this.postsContainer;
        this.postContainer;
        this.modal;
        this.openModalBtn;
        this.modalTitle;
        this.modalDescription;
        this.modalPublicCheck;
        this.addPostBtn;

    }
    
    init() {
        $(document).ready(function () {
            console.log(this);
            this.postsRow = $("#postsRow");
            this.postContainer = $("#postContainer");
            this.modal = $("#newPostModal");
            this.modalTitle = $("#postTitle");
            this.modalBody = $("#postBody");
            this.modalCheck = $("#publicCheck");
            this.addPostBtn = $("#savePostBtn");
            this.addPostBtn = $("#savePostBtn");
            
            this.addPostBtn.click(function(){
                var post = new Post(
                    this.modalTitle.val(),
                    this.modalBody.val(),
                    this.modalCheck.is(":checked"),
                    false
                );
                this.newPost(post);
                this.closeModal();
                this.resetModal();
            }.bind(this));


            this.getPosts();

           


        }.bind(this));

    }



    getPosts() {

        this.restController.get("https://texty-89895.firebaseio.com/posts.json",function(data,status,xhr){
                for(var id in data){
                    var post = data[id];
                    if(post.public === true){
                        this.createUIPost(post);
                    }
                }



        }.bind(this));
        // $.get({
        //     url: "https://texty-89895.firebaseio.com/posts.json",
        //     success: function(data,textStatus,jqXHR){

        //            for(var id in data){
        //                 var post = data[id];
        //                 if(post.public === true){
        //                     this.createUIPost(post);
        //                 }
        //            }

        //     }.bind(this)
        //   });

        
    }

    newPost(post){
        //api call
        console.log()
        var data = {
            "title":post.title,
            "body": post.body,
            "featured": post.featured,
            "public": post.public,
            "tag": [
                "notizie",
                "covid"
            ]

        }

        $.post({
            url:"https://texty-89895.firebaseio.com/posts.json",
            data : JSON.stringify(data),
            success:function(data,status,xhr){
                this.createUIPost(post);

            }.bind(this)


        })


    }


    addPost(post) {

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

    createUIPost(post){
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

    closeModal() {
        this.modal.modal('hide');
    }


    openModal() {


    }


    resetModal() {
        this.modalTitle.val("");
        this.modalBody.val("");

    }

    
}