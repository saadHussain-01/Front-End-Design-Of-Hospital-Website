/* FORM VALIDATION USING JQUERY */


$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();

        var isValid = true;
        
        // Validate firstname
        var firstname = $("#firstName").val();
        if (firstname === "") {
            $("#firstnameError").text("First name is required.");
            isValid = false;
        } else {
            $("#firstnameError").text("");
        }
        
        // Validate lastname
        var lastname = $("#lastName").val();
        if (lastname === "") {
            $("#lastnameError").text("Last name is required.");
            isValid = false;
        } else {
            $("#lastnameError").text("");
        }
        
        // Validate phoneno
        var phoneno = $("#number").val();
        if (phoneno === "") {
            $("#phonenoError").text("Phone number is required.");
            isValid = false;
        } else {
            $("#phonenoError").text("");
        }
        
        // Validate select field
        var selectField = $("#disease").val();
        if (selectField === "") {
            $("#selectFieldError").text("Please select an option.");
            isValid = false;
        } else {
            $("#selectFieldError").text("");
        }
        
        if (!isValid) {
            event.preventDefault();
        }

        
        // Validate date
        var date = $("#dateOfAppointment").val();
        if (date === "") {
            $("#dateError").text("Date is required.");
            isValid = false;
        } else {
            $("#dateError").text("");
        }
        
        // Validate select field
        var selectField = $("#Specialist").val();
        if (selectField === "") {
            $("#selectFieldError").text("Please select an option.");
            isValid = false;
        } else {
            $("#selectFieldError").text("");
        }
        
        if (isValid) {
           alert("form is submitted");

           $("#firstName").val("");
           $("#lastName").val("");
           $("#number").val("");
           $("#disease").val("");
           $("#dateOfAppointment").val("");
           $("#Specialist").val("");
        }
        else{
            alert("please fill all the fields");
        }

    });
});


