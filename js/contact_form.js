$(document).ready(function() {
    $("button").click(function() {
        $("form").toggle();
        $("#form").reset();
    });

    $("#form").parsley();

    $("#submit").click(function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var contact = $("#contact").val();
        $("#returnmessage").empty(); // To empty previous error/success message.

        // Checking for blank fields.
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
            .done(function(data) {
                //alert("Data Saved: " + msg);
                //data = JSON.stringify(data);
                console.log(data.type);
                console.log(data.message);
                var msg = "<div class='" + data.type + "'>" + data.message + "</div>";
                $("#returnmessage").append(msg);


                if (data.type === "success") {
                    $("#form")[0].reset();
                }

            })
            .fail(function(msg) {
                //alert("failed");
                var msg = "<div class='" + data.type + "'>" + data.message + "</div>";
                $("#returnmessage").append(msg);
            })
            .always(function(msg) {
                //alert( "complete" );
            });
    });
});