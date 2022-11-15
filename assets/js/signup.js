/// Znam da moze da se pozove samo login.js i da ce sve raditi, ali sam hteo da imam jos jedan primer radi vezbanja.


document.getElementById("signup").addEventListener("click",function(event){
    event.preventDefault();
    const validation=new SignUp (document.getElementById("email"),document.getElementById("password"));
    const formValid=validation.validate();
    if (formValid==true){
        // event.target.submit();
        document.getElementById("BookForm").submit();
    }

})


function SignUp (email,password){
    this.email=email;
    this.password=password;
    this.validate=function (){
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
        const isEmailValid = regexEmail.test(this.email.value);
        const regexPassword= /^[A-Z]\d{4,10}$/;
        const isPasswordValid = regexPassword.test(this.password.value);
        let isFormValid=true;
        console.log(isPasswordValid);
        console.log(isEmailValid);
        if(isEmailValid!==true){
           isFormValid=false;
           document.getElementById("email").style.border=" 3px solid red";
        }else {
            document.getElementById("email").style.border="none"
        }
        if(isPasswordValid!==true){
             isFormValid=false;
             document.getElementById("password").style.border=" 3px solid red";
        }else {
            document.getElementById("password").style.border="none"
        }
        return isFormValid;
    }
}


