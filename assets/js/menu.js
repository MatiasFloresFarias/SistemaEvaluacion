// -----------------------------------------menu-------------------------------------------------
var user = ["mlillo@correo.com", "mflores@correo.com", "jtolorza@correo.com", "mgaete@correo.com", "clloncon@correo.com"];
var pswd = ["e0c826b1c1532015b386addb63147c5e", "143d42165dfaa0e4870b787d8d0cb125", "048056ad6efca97d0b4cff5f0114bb09", "6896feb8e3499d6dc48e4dc5625b4020", "2b9ff3efc4a999ecfacd18c4bbc57a2e"];


$(document).ready(function() {
 
    $("#input_submit").click(function() {

        for (let index = 0; index < user.length; index++) {
            contU = 0;
            contP = 0;
            if ($("#field_email").val() == user[index]) {
                contU++;
                if (md5($("#field_password").val()) == pswd[index]) {
                    alert("login correcto");
                    window.open("index.html", "_self")
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

    });

});
// -----------------------------------------menu-------------------------------------------------
