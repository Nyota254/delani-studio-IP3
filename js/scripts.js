$(document).ready(function () {
    $("#design-toggle").click(function () {
        $("#design-icon").toggle();
        $("#design-explanation").toggle();
    });
    $("#development-toggle").click(function () {
        $("#development-icon").toggle();
        $("#development-explanation").toggle();
    });
    $("#product-toggle").click(function () {
        $("#product-icon").toggle();
        $("#product-explanation").toggle();
    });
    $(".form-style").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#textarea").val();

        alert(name + " we have recieved your message.Thankyou for reaching out to us.");
    });
    $(".custom-sizing1").hover(function(){  
        $(".portfolio-name1").toggle();
    }, function(){
        $(".portfolio-name1").toggle();
    });
    $(".custom-sizing2").hover(function(){  
        $(".portfolio-name2").toggle();
    }, function(){
        $(".portfolio-name2").toggle();
    });
    $(".custom-sizing3").hover(function(){  
        $(".portfolio-name3").toggle();
    }, function(){
        $(".portfolio-name3").toggle();
    });
    $(".custom-sizing4").hover(function(){  
        $(".portfolio-name4").toggle();
    }, function(){
        $(".portfolio-name4").toggle();
    });
    $(".custom-sizing5").hover(function(){  
        $(".portfolio-name5").toggle();
    }, function(){
        $(".portfolio-name5").toggle();
    });
    $(".custom-sizing6").hover(function(){  
        $(".portfolio-name6").toggle();
    }, function(){
        $(".portfolio-name6").toggle();
    });
    $(".custom-sizing7").hover(function(){  
        $(".portfolio-name7").toggle();
    }, function(){
        $(".portfolio-name7").toggle();
    });
    $(".custom-sizing8").hover(function(){  
        $(".portfolio-name8").toggle();
    }, function(){
        $(".portfolio-name8").toggle();
    });

});