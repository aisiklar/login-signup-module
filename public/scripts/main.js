
/* const form = document.getElementById('sign-form');

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);
})
 */


const signupButton = document.getElementById('button-for-signup');

const signupForm = document.getElementById('signup-form');

const signinForm = document.getElementById('signin-form')

const showSignupButton = document.getElementById("button-for-signup");

showSignupButton.addEventListener('click', showSignup);

function showSignup() {
    console.log("showSignup function triggered");
    signupForm.style.display = "block";
    signinForm.replaceWith(signupForm);
}


function pressSignup(event) {
    console.log("button pressed")
}