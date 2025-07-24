const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const email = document.getElementById("email");
const QueryType1 = document.getElementById("QueryType1");
const QueryType2 = document.getElementById("QueryType2");
const message = document.getElementById("message");
const queryTypeDiv1= document.getElementById("queryTypeDiv1");
const queryTypeDiv2 = document.getElementById("queryTypeDiv2");
const subscribe = document.getElementById("subscribe");
const firstNameError = document.getElementById("firstNameError");
const secondNameError = document.getElementById("secondNameError");
const emailError = document.getElementById("emailError");
const queryTypeError = document.getElementById("queryTypeError");
const messageError = document.getElementById("messageError");
const subscribeError = document.getElementById("subscribeError");
const submitButton = document.getElementById("submitButton");
const successMessage = document.getElementById("successMessage");
console.log(queryTypeDiv1,queryTypeDiv2);



submitButton.addEventListener("click", (event)=>{ 
    //prevent default form submission behavior
    event.preventDefault();
    
 //prevent form submission;
    if (firstName.value === "" && secondName.value === "" && email.value === "" && message.value === ""&& QueryType1.checked===false && QueryType2.checked===false && subscribe.checked === false) {
        firstNameError.textContent = "this field is required.";
        secondNameError.textContent = "this field is required.";
        emailError.textContent = "Please enter a valid Email.";
        messageError.textContent = "Message is required.";
        queryTypeError.textContent = "Please select a query type.";
        subscribeError.textContent = "To submit this form ,please consent to being contacted.";
        firstName.style.borderColor = "rgba(231, 88, 88, 0.507)";
        secondName.style.borderColor = "rgba(231, 88, 88, 0.507)";
        email.style.borderColor = "rgba(231, 88, 88, 0.507)";
        message.style.borderColor = "rgba(231, 88, 88, 0.507)";
        queryTypeDiv1.style.borderColor = "rgba(231, 88, 88, 0.507)";
        queryTypeDiv2.style.borderColor = "rgba(231, 88, 88, 0.507)";
        
     } else if (!QueryType1.checked && !QueryType2.checked) {
        queryTypeError.textContent = "Please select a query type.";
    } else if (subscribe.checked === false) {
        subscribeError.textContent = "To submit this form ,please consent to being contacted.";
    }else if(!firstName.value){
        firstNameError.textContent = "this field is required.";
    }else if(!secondName.value){
        secondNameError.textContent = "this field is required.";
    }else if(!email.value){
        emailError.textContent = "Email is required.";
    } else if(!email.value.includes("@") || !email.value.includes(".")){
        emailError.textContent = "Please enter a valid email address.";

    }else if(!message.value){
        messageError.textContent = "Message is required.";
    } else {
        // Clear all error messages
        firstNameError.textContent = "";
        secondNameError.textContent = "";
        emailError.textContent = "";
        queryTypeError.textContent = "";
        messageError.textContent = "";
        subscribeError.textContent = "";
        firstName.value="";
        secondName.value="";
        email.value="";
        message.value="";
        QueryType1.checked = false;
        QueryType2.checked = false;
        subscribe.checked = false;
          firstName.style.borderColor = "";
        secondName.style.borderColor = "";
        email.style.borderColor = "";
        message.style.borderColor = "";
        queryTypeDiv1.style.borderColor = "";
        queryTypeDiv2.style.borderColor = "";
        
        // Show success message
         successMessage.style.display = "block";
           setTimeout(()=>{
            successMessage.style.display = "none";
           },2000)
        
       

        // Here you can add code to handle the form submission, like sending data to a server
    }

})
