const signUp = document.querySelector(".signUpBtn");
const signIn = document.querySelector(".signInBtn");
const nameField = document.querySelector(".name-field");
const title = document.querySelector(".title");
const underline = document.querySelector(".underline");
const forgotPass = document.querySelector("#pass");
const genPass = document.querySelector(".generatePass");
const generatedPass = document.querySelector("#generatedPass");
const typedName = document.querySelector("#name");
const typedEmail = document.querySelector("#email");

signIn.addEventListener("click" , () => {
    nameField.style.maxHeight = "0";
    nameField.style.border = "0px";
    title.innerHTML = "Sign In";
    signIn.classList.remove("disabled");
    signUp.classList.add("disabled");
    genPass.style.maxHeight = "0";
    genPass.innerHTML = " ";
    forgotPass.innerHTML = "<a href='#' id='forgotPass'>Forgot password ?</a>";
    generatedPass.value = "";
    typedEmail.value = "";
    typedName.value = "";
    underline.style.transform = "translateX(30px)";
})

signUp.addEventListener("click", () => {
    nameField.style.maxHeight = "60px";
    nameField.style.border = "2px solid rgba(255, 255, 255, .5)";
    title.innerHTML = "Sign Up";
    signUp.classList.remove("disabled");
    signIn.classList.add("disabled");
    pass.innerHTML = "";
    genPass.innerText = "Generate Password";
    generatedPass.value = "";
    typedEmail.value = "";
    typedName.value = "";
    underline.style.transform = "translate(0)"
})

const passBox = document.querySelector("#pass");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "~!@#$%^&*()_+?><:{}|';/.,']";

const allChars = upperCase + lowerCase + nums + symbols;

generatePassword = () => {
    let password = "";
    password+= upperCase[Math.floor(Math.random() * upperCase.length)];
    password+= lowerCase[Math.floor(Math.random) * lowerCase.length];
    password+= nums[Math.floor(Math.random() * nums.length)];
    password+= symbols[Math.floor(Math.random() * symbols.length)];
    
    while (password.length <length) {
        password+= allChars[Math.floor(Math.random) * allChars.length];
    }
    console.log(password);
    generatedPass.value = password;
    
}
