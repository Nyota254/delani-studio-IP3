$(document).ready(function(){
    $("#design-toggle").click(function(){
        $("#design-icon").toggle();
        $("#design-explanation").toggle();
    });
    $("#development-toggle").click(function(){
        $("#development-icon").toggle();
        $("#development-explanation").toggle();
    });
    $("#product-toggle").click(function(){
        $("#product-icon").toggle();
        $("#product-explanation").toggle();
    });
    $(".form-style").submit(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#textarea").val();
        
        alert(name + " we have recieved your message.Thankyou for reaching out to us.");
    });
});