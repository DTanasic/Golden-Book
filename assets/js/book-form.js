function AddBook(url,title,author,year,category,description) {
    this.url=url;
    this.title=title;
    this.author=author;
    this.year=year;
    this.category=category;
    this.description=description;

    this.validate=function(){
        const regexurl=/^(http|https)\:\/\/[a-z\d\.\-]{5,}$/ ;
        let isUrlValid=regexurl.test(this.url.value);
        displayErrorMessage(isUrlValid,this.url);
        
        const regexTitle=/^[A-Z][A-z\d]{9,50}$/;
        let isTitleValid=regexTitle.test(this.title.value);
        displayErrorMessage(isTitleValid,this.title);
       
        const AuthorValue=this.author.value;
        let isAuthorValid=true;
        if (AuthorValue<1){
            isAuthorValid=false;
        }
        displayErrorMessage(isAuthorValid,this.author);
       
        let isYearValid=true;
        const year=this.year.value;
        const yearDate=new Date(year);
        const yearValue=yearDate.getFullYear();
        if (yearValue>=2022){
            isYearValid=true;
        }else if (yearValue<2022){
            isYearValid=false;
        }
        displayErrorMessage(isYearValid,this.year);
        
        const CategoriesValue=this.category.value;
        let isCategoriesValid=true;
        if(CategoriesValue<1){
            isCategoriesValid=false;
        }
        displayErrorMessage(isCategoriesValid,this.category);
        
        const regexDescription=/^.{1,250}$/;
        let isDescriptionValid=regexDescription.test(this.description.value);
        displayErrorMessage(isDescriptionValid,this.description);

         let isFormValid=true;
         if(isUrlValid==false){
            isFormValid=false;
         }
         if(isTitleValid==false){
            isFormValid=false;
         }
         if(isAuthorValid==false){
            isFormValid=false;
         }
         if(isYearValid==false){
            isFormValid=false;
         }
         if(isCategoriesValid==false){
            isFormValid=false;
         }
         if(isDescriptionValid==false){
            isFormValid=false;
         }
         return isFormValid;
    } 
}

const AuthorList=[
    { name:"Den Broun"},
    { name:"Stiven King"},
    { name:"Fredrih Backman"}
]
for(let i=0; i<AuthorList.length; i++){
    document.getElementById("Autor-Book").innerHTML+=`<option value="${i+1}">${AuthorList[i].name}</option>`;
}

const Categories=[
    { name:"Fantasy"},
    { name:"Drama"},
    { name:"Horor"},
    { name:"Action"}
]
for(let i=0; i<Categories.length; i++) {
    document.getElementById("Categories-Book").innerHTML+=`<option value="${i+1}">${Categories[i].name}</option>`
}

const errorMessages=document.getElementsByClassName("errorMessage");
for(let message of errorMessages){
    message.classList.add("display-none");
}




const add=new AddBook (document.getElementById("url"),document.getElementById("Title-Book"),
document.getElementById("Autor-Book"),document.getElementById("Year-Book"),document.getElementById("Categories-Book"),
document.getElementById("Description-Book"));

const form=document.getElementById("Book-Form-Add");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const isFormValid=add.validate();
    if(isFormValid==true){
        event.target.submit();
    }
})






function displayErrorMessage(isFieldValid, formElement) {
    if(isFieldValid) {
        formElement.nextElementSibling.classList.add("display-none");
    } else {
        formElement.nextElementSibling.classList.remove("display-none");
    }
}