
$(document).ready(function () {

    var users = [
        'mario', 'giulio', 'alberto', 'claudia'
    ]

    $(".send-comment").click(function () {
        var commentText = $(".comment-text").val();

        var commentContainer = $(".comments-container");
        var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">' + users[Math.round(Math.random(0, 3))
        ] + '</a>' + commentText + '</li>';

        commentContainer.append(commentRow);

    });

});

