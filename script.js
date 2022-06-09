// GET FORM
let theForm = document.querySelector("form");

// GET INPUT
let theInput = document.querySelector("#email");

theInput.onfocus = () => {
    theInput.style.borderColor = "var(--BLUE)";
    alert.innerHTML = "";
}

// GET ALERT
let alert = document.querySelector(".alert");

// Validation functions
function validateInput() {
    theInput.style.borderColor = "var(--LR)"
    alert.innerHTML = "Please, provide a valid email address";
}

function validateInputEmpty() {
    theInput.style.borderColor = "var(--LR)"
    alert.innerHTML = "Whoops! It looks like you forgot to add your email";
}


theForm.onsubmit = function(e) {
    e.preventDefault();
    let theTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$ /;
    let theInputValue = theInput.value;


    if (theInputValue == "") {
        validateInputEmpty();
    } else if (theTest.test(theInputValue) === false) {
        e.preventDefault();
        validateInput();
    } else {
        theForm.onsubmit = null;
    }
}