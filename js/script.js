'use strict';

const navItems = document.querySelectorAll('.nav-link');
const tabPane = document.querySelectorAll('.tab-pane');

//form validation regex
let regEmail = /^([a-z0-9\-_\.])+@(([a-z0-9\-_])+\.)+([a-z0-9]{2,4})$/i;
let regName = /^(([a-z ]){2,})$/i;
let regAddress = /^[\d\w][\s\d\w\,\-\(\)\/\.]+[\d\w]$/i;

//tab navigation
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', function () {
        
        
        navItems.forEach((el, i) => {
            el.classList.remove('active');
        });
        navItem.classList.add('active');

        tabPane.forEach((el, i) => {
            el.classList.remove('in', 'active');
            
        });
        
        tabPane[index].classList .add('in', 'active');
    });
});

let formBtn1 = document.getElementById('form-btn1');

formBtn1.addEventListener('click', function(){
    persondetailsForm();
});

function persondetailsForm() {
    if(isNameFill && isEmailFill && isGenderSelected && isAdressFill){
        persondetails.checked = true;
        navItems[1].classList.remove('disabled');
        navItems.forEach((el, i) => {
            el.classList.remove('active');
        });
        navItems[1].classList.add('active');
        tabPane.forEach((el, i) => {
            el.classList.remove('in', 'active');
            
        });
        tabPane[1].classList .add('in', 'active');
        window.localStorage.setItem('personDet', JSON.stringify(persondetails));
    }
    else{
        alert("please fill all the form details");
        persondetails.checked = false;
    }
}


let persondetails = {
    fullName : "",
    email : "",
    gender : "",
    adress : "",
    checked : false
}


let isNameFill = false;
let isEmailFill = false;
let isGenderSelected = false;
let isAdressFill = false;

function inputFunction(type, value, id, name){
    //console.log(type, value, id, name);
    switch(type){
        case "text":
            if(id == "fullName"){
                if (!regName.test(value)) {
                    alert("please enter a valid name");
                    isNameFill = false;
                }
                else{
                    persondetails.fullName = value;
                    isNameFill = true;
                }
            }
            break;
        case "email":
            if(id == "email"){
                if (!regEmail.test(value)) {
                    alert("please enter a valid Email");
                    isEmailFill = false;
                }else{
                    persondetails.email = value;
                    isEmailFill = true;
                }
            }
            break;
        case "radio": 
            if(name == "gender"){
                persondetails.gender = value;
                isGenderSelected = true;
            }
    }

    if(id == "adress"){
        if (!regAddress.test(value)) {
            alert("please enter a valid adress");
            isAdressFill = false;
        }else{
            persondetails.adress = value;
            isAdressFill = true;
        }
    }
}


//fetch values


