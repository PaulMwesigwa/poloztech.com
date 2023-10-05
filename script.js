document.getElementById("service-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var serviceType = document.getElementById("service-type").value;
    var issueDescription = document.getElementById("issue-description").value;

    // Here you can send the form data to a server using AJAX or perform any other desired actions.
    // For simplicity, let's just display the form data in a message.
    var responseMessage = `Service Request Submitted<br>
                           Name: ${name}<br>
                           Email: ${email}<br>
                           Phone number: ${phone}<br>
                           Service Type: ${serviceType}<br>
                           Issue Description: ${issueDescription}`;

    document.getElementById("response-message").innerHTML = responseMessage;
    // You can also reset the form after submission if needed:
    document.getElementById("service-form").reset();
});
