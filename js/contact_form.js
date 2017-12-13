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
        } else
            alert("It is working");

    });
});