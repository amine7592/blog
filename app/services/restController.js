class RestController{


    constructor(){        
    }



    get(url,onSuccess,onError){
        $.get({
            url: url,
            success: onSuccess
          });


    }

    post(url,data,onSuccess,onError){
        $.post({
            url: url,
            data:JSON.stringify(data),
            success: onSuccess
          });


    }


}