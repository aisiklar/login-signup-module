
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

const cancelSignupButton = document.getElementById("cancel-signup-button");


//Event Listener for show Signup Button.
showSignupButton.addEventListener('click', (event) => {
    //console.log("showSignup function triggered");
    signupForm.style.display = "block";
    signinForm.replaceWith(signupForm);
});

//event listener for cancel signup Button
cancelSignupButton.addEventListener('click', (event) => {
    //console.log('cancel Signup Button pressed');
    //console.log(event);
    signupForm.replaceWith(signinForm);
    signupForm.style.display = "none";
})