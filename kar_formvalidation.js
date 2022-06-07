/*    Author: Karla Rivera
      Course:  ITSE2402
      Date Created:  04/30/2022

 *    Filename: kar_formvalidation.js
 */

/* validate form input */
function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

     if (fname == null || fname == "", lname == null || lname == "",
      email == null || email == "") {
          alert("Please Fill All Required Fields");
          }
}
function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("message").value = "";
    document.getElementById("preference").checked = false;
    document.getElementById("months").selectedIndex = 0;
    document.getElementById("radio").checked = false;
    document.getElementById("reason").selectedIndex = 0;
}

function createEventListener() {
    document.getElementById("submit").addEventListener("click", validateForm, false);
    document.getElementById("clear").addEventListener("click", resetForm, false);
}

createEventListener();
resetForm();