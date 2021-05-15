$(document).ready(function () {
    $("#submit").click(function(e){
        e.preventDefault();
        if(($("#name").val() == "") || ($("#email").val() == "") || ($("#number").val() == "") || ($("#message").val() == "")){
            alert("Please fill all the inputs");
        }else{
            if($("#name").val().length > 50){
                alert("Name cannot be greater than 50")
            }else if($("#name").val().length < 3){
                alert("Name cannot be smaller than 3")
            }

            if(!($("#email").val().includes("@"))){
                alert("Please include an @ in the email")
            }

            if(!($("#number").val().length == 10)){
                alert("Invalid phone number")
            }
        }
    })

    $(".subscribe").click(function (e) { 
        e.preventDefault();
        if($("#newsletter-input").val() == ""){
            alert("Input cannot be empty")
        }else{
            if(!($("#newsletter-input").val().includes("@"))){
                alert("Email should include an @")
            }
        }
    });
});