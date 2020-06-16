var user = ["mlillo", "mflores", "jtolorza", "mgaete", "clloncon"];
var pswd = ["e0c826b1c1532015b386addb63147c5e", "143d42165dfaa0e4870b787d8d0cb125", "048056ad6efca97d0b4cff5f0114bb09", "6896feb8e3499d6dc48e4dc5625b4020", "2b9ff3efc4a999ecfacd18c4bbc57a2e"];


$(document).ready(function() {
    // on click Sign In Button checks that username =='admin' and password == 'password'
    $(".login").click(function() {

        for (let index = 0; index < user.length; index++) {
            contU = 0;
            contP = 0;
            if ($("#loginusername").val() == user[index]) {
                contU++;
                if (md5($("#loginpassword").val()) == pswd[index]) {
                    $("#first").hide();
                    $("#second").show();
                    $("#second").append("<p>Hello, admin</p> <br/><input type='button' class='logout' value='Log Out' />");
                    contP++;
                    break;
                }
            }
        }
        if (contU == 0) {
            alert("wrong user")
        }
        if (contP == 0 && contU != 0) {
            alert("wrong password")
        }

        $(".logout").click(function() {
            $("form")[0].reset();
            $("#second").children('p, input').remove();
            $("#first").show();
            $("#second").hide();
        });
    });

});