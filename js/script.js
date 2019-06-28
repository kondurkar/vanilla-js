'use strict';

const navItems = document.querySelectorAll('.nav-item');



//tab navigation
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', function () {
        const children = navItem.children;
        //children.innerHTML.classList.add('active');
        //console.log(children.nodeValue);
        
        document.querySelectorAll('.nav-link').classList.add('active');
        this.querySelector('.nav-link').classList.add('active');
    });
});



let formBtn1 = document.getElementById('form-btn1');

formBtn1.addEventListener('click', function(){
    validateForm();
});

//form validation
function validateForm() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let adress = document.getElementById('adress').value;
    let regEmail = /^([a-z0-9\-_\.])+@(([a-z0-9\-_])+\.)+([a-z0-9]{2,4})$/i;
   
    if (fullName == "") {
        alert("Name must be filled out");
    }
    
    if ( !regEmail.test(email) ) {
        alert("email must be filled out");
    }
}

//fetch values

