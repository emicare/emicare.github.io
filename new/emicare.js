function sendMail() {
    var eminame = document.getElementById("eminame").value;
    var emiemail = document.getElementById("emiemail").value;
    var emimobile = document.getElementById("emimobile").value;
    var emimessage = document.getElementById("emimessage").value;

    var jsonpElem = document.createElement("script");
    jsonpElem.setAttribute("src", "http://emicare-mailservice.rhcloud.com/sendmail?eminame=" + eminame + "&emiemail=" + emiemail + "&emimobile=" +emimobile + "&emimessage=" + emimessage )

    document.head.appendChild(jsonpElem);
}

function mailSent() {
    alert("You query has been sent succesfully.");
}

function mailError() {
    alert("Error Sending mail. Please check all fields and try again.");
}