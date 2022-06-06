function pageLoad() {
    var C = document.getElementsByClassName("form-carryout")[0];
    C.style.display = 'none';
}


function hideDelivery() {
    var D = document.getElementsByClassName("form-delivery")[0];
    D.style.display = 'none';
    var C = document.getElementsByClassName("form-carryout")[0];
    C.style.display = "block";
}

function hideCarryout() {
    var C = document.getElementsByClassName("form-carryout")[0];
    C.style.display = 'none';
    var D = document.getElementsByClassName("form-delivery")[0];
    D.style.display = "block";
}

function createEventListener() {
    document.getElementById("carryout").addEventListener("click", hideDelivery, false);
    document.getElementById("delivery").addEventListener("click", hideCarryout, false);
}

pageLoad();
createEventListener();