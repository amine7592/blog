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

        this.editMode = false;
        this.editedPostId = null;
        this.editedPost = null;


    }
    
    init() {
        $(document).ready(function (){
            this.postsRow = $("#postsRow");
            this.postContainer = $("#postContainer");
            this.modal = $("#newPostModal");
            this.modalTitle = $("#postTitle");
            this.modalBody = $("#postBody");
            this.modalCheck = $("#publicCheck");
            this.addPostBtn = $("#savePostBtn");
            this.addPostBtn = $("#savePostBtn");
            
            this.addPostBtn.click(function(){

                if(editMode){
                    //
                    this.updatePost(editedPost);


                }else{

                    var post = new Post(
                        this.modalTitle.val(),
                        this.modalBody.val(),
                        this.modalCheck.is(":checked"),
                        false
                    );
                    this.newPost(post);


                }
              
                this.closeModal();
                this.resetModal();

            }.bind(this));


            this.getPosts();

           


        }.bind(this));

    }


    updatePost(post){
        //call the rest controller

        this.restController.updatePost("https://texty-89895.firebaseio.com/posts/" +post.id  + ".json",
            function(){
                this.closeModal();
                this.resetModal();
                //update UI 
                editMode = false;
                editedPost = null;

            }.bind(this)
        )


    }



    getPosts() {

        this.restController.get("https://texty-89895.firebaseio.com/posts.json",function(data,status,xhr){
                for(var id in data){
                    var post = data[id];
                    post.id = id;
                    if(post.public === true){
                        this.createUIPost(post);
                    }
                }
        }.bind(this));

        
    }

    newPost(post){
        //api call
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


        this.restController.post("https://texty-89895.firebaseio.com/posts.json",data,function(){
            this.createUIPost(post);

        }.bind(this));

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

        postContainer.find("#editPost").click(function(){
                this.editMode = true;
                this.editedPost = post;
                this.openModal(post);

        }.bind(this));
    
        $("#postsRow").append(postContainer);
    
    }

    closeModal() {
        this.modal.modal('hide');
    }


    openModal(post) {
        console.log(post);
        this.modal.modal('show');
        
    }


    resetModal() {
        this.modalTitle.val("");
        this.modalBody.val("");

    }

    
}