function Login(email,password){
    this.email= email;
    this.password=password;
    
    this.validateForm=function() {
        const regexPassword= /^[A-z\d]{8}$/;
        const isPasswordValid=regexPassword.test(this.password.value);
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
        const isEmailValid = regexEmail.test(this.email.value);
        displayErrorMessage(isEmailValid,this.email);
        displayErrorMessage(isPasswordValid,this.password);
        const isFormValid=true;
        if (isPasswordValid==false){
            isFormValid=false;
        }
        if(!isEmailValid){
            isFormValid=false;
        }
        return isFormValid;
    }

}
const login=new Login(document.getElementById("email"),document.getElementById("password"));

function Error (errorMessages){
    this.errorMessages=errorMessages;

    this.hideErrorMessage=function (){
        for (let errorMessage of this.errorMessages){
            errorMessage.classList.add("display-none");      
        }
    }
} 
const error=new Error(document.getElementsByClassName("errorMessage"));
error.hideErrorMessage();


const forms=document.getElementById("BookForm");
forms.addEventListener("submit",function(event){

    event.preventDefault();
    const isFormValid=login.validateForm();
    
    if(isFormValid){
        event.target.submit();
    }
    
})

function displayErrorMessage(isFieldValid, formElement) {
    if(isFieldValid) {
        formElement.parentElement.querySelector(".errorMessage").classList.add("display-none");
    } else {
        formElement.parentElement.querySelector(".errorMessage").classList.remove("display-none");
    }
}
