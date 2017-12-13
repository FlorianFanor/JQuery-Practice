$(function() {

    $("#contact").mask("(999) 999-9999");


    $("#contact").on("blur", function() {
        var last = $(this).val().substr($(this).val().indexOf("-") + 1);

        if (last.length == 5) {
            var move = $(this).val().substr($(this).val().indexOf("-") + 1, 1);

            var lastfour = last.substr(1, 4);

            var first = $(this).val().substr(0, 9);

            $(this).val(first + move + '-' + lastfour);
        }
    });
});

$(document).ready(function() {
    $('#form').parsley();
    $("#submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var contact = $("#contact").val();
        $("#returnmessage").empty(); // To empty previous error/success message.

        // Checking for blank fields.
        if (name == '' || email == '' || contact == '') {
            alert("Please Fill Required Fields");
        } else {
            $.ajax({
                    method: "POST",
                    url: "https://wt-4e8c7e4544b5cacf32167cf90e12dfeb-0.run.webtask.io/contactform/contact",
                    data: {
                        "name": name,
                        "email": email,
                        "message": message,
                        "contact": contact
                    }
                })
                .done(function(msg) {
                    alert("Data Saved: " + msg);
                    $("#returnmessage").append(msg);
                    $("#form")[0].reset();
                })
                .fail(function(msg) {
                    alert("failed");
                })
                .always(function(msg) {
                    //alert( "complete" );
                });

        }
    });
});